import RequestMethods from './RequestMethods';
import RequestEndpoints from './RequestEndpoints';
import RequestParams from './RequestParams';
import RequestSender from './RequestSender';

export default class Requester {
    constructor(storage) {
        this._requestSender = new RequestSender(storage);
        this._requestEndpoints = new RequestEndpoints();
    }

    register(userObj, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("Register"),
            RequestMethods.POST,
            userObj,
            captchaToken).then(res => res);
    }
    login(userObj) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("Login"),
            RequestMethods.POST,
            userObj).then(res => res);
    }
    getCurrencies() {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetCurrencies"),
            RequestMethods.GET).then(res => res);
    }
    getListing(id) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetListing", [id]),
            RequestMethods.GET).then(res => res);
    }

    getChatMessages(id, page = 0) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetChatMessages", [id, page]),
            RequestMethods.GET).then(res => res);
    }

    getMyConversations(searchTerm) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetMyConversations", undefined, [searchTerm, "sort=id,desc"]),
            RequestMethods.GET).then(res => res);
    }
}