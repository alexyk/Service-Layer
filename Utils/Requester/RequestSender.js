import RequestMethods from './RequestMethods';
import RequestEndpoints from './RequestEndpoints';
import RequestParams from './RequestParams';
import { domainPrefix } from '../config';

export default class RequestSender {
    constructor(storage, headers = {}) {
        this._storage = storage;
		this.RequestParams = new RequestParams(storage, headers);
    }

    /**
     * 
     * @param {String} endpoint 
     * @param {Enumerator} method 
     * @param {Object} postObj 
     * @param {String} captchaToken
     */
    async sendRequest(endpoint, method, postObj = null, captchaToken = null) {
        const methodRef = this.RequestParams[method].bind(this.RequestParams);
        let requestHeaders = await methodRef(postObj);

        return fetch(endpoint, requestHeaders)
            .then((response) => {
                if (!response.ok) {
                    return {
                        body: {},
                        success: response.ok,
                        errors: response.json().then((r) => {
                            this.checkExpiredJwtAndLogOff(r)
                            return r;
                        })
                    };
                }
                return {
                    body: response.json(),
                    success: response.ok,
                    errors: {}
                };
            });
    }

    checkExpiredJwtAndLogOff(r) {
        if (r.errors && r.errors.ExpiredJwt) {
            this._storage.removeItem(`${domainPrefix}.auth.locktrip`);
            this._storage.removeItem(`${domainPrefix}.auth.username`);
        }
    }
}