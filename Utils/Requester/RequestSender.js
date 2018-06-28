import RequestMethods from './RequestMethods';
import RequestEndpoints from './RequestEndpoints';
import RequestParams from './RequestParams';
import { domainPrefix } from '../config';

export default class RequestSender {
    constructor(storage) {
        this._storage = storage;
		this.RequestParams = new RequestParams(storage);
    }

    async sendRequest(endpoint, method, postObj = null, captchaToken = null) {
        const methodRef = this.RequestParams[method].bind(this.RequestParams);
        let requestHeaders = await methodRef(postObj);

        return fetch(endpoint, requestHeaders)
            .then((res) => {
                if (!res.ok) {
                    return {
                        response: res.json().then((r) => {
                            if (r.errors && r.errors.ExpiredJwt) {
                                this._storage.removeItem(`${domainPrefix}.auth.lockchain`);
                                this._storage.removeItem(`${domainPrefix}.auth.username`);
                            }
                            return r;
                        }),
                        success: !res.ok
                    };
                }
                return {
                    response: res,
                    success: res.ok
                };
            });
    }
}