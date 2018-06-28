import RequestMethods from './RequestMethods';
import RequestEndpoints from './RequestEndpoints';
import RequestParams from './RequestParams';
import RequestSender from './RequestSender';

export default class Requester {
    constructor(storage) {
        this._requestSender = new RequestSender(storage)
    }

    register(userObj, captchaToken) {
        return this._requestSender.sendRequest(RequestEndpoints.Register, RequestMethods.POST, userObj, captchaToken).then(res => res);
    }
    login(userObj) {
        return this._requestSender.sendRequest(RequestEndpoints.Login, RequestMethods.POST, userObj).then(res => res);
    }
}