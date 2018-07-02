import RequestMethods from './RequestMethods';
import RequestEndpoints from './RequestEndpoints';
import RequestParams from './RequestParams';
import RequestSender from './RequestSender';

export default class Requester {
    constructor(storage) {
        this._requestSender = new RequestSender(storage);
        this._requestEndpoints = new RequestEndpoints();
    }

    /**
     * 
     * @param {Object} userObj 
     * @param {String} captchaToken 
     * @returns {Promise}
     */
    register(userObj, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("Register"),
            RequestMethods.POST,
            userObj,
            captchaToken).then(res => res);
    }

    /**
     * 
     * @param {Object} userObj 
     * @returns {Promise}
     */
    login(userObj) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("Login"),
            RequestMethods.POST,
            userObj).then(res => res);
    }

    /**
     * @returns {Promise}
     */
    getCurrencies() {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetCurrencies"),
            RequestMethods.GET).then(res => res);
    }

    /**
     * 
     * @param {Number} id 
     */
    getListing(id) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetListing", [id]),
            RequestMethods.GET).then(res => res);
    }

    /**
     * 
     * @param {Number} id 
     * @param {Number} page 
     */
    getChatMessages(id, page = 0) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetChatMessages", [id, page]),
            RequestMethods.GET).then(res => res);
    }

    /**
     *
     * @param {Array} searchTerm 
     */
    getMyConversations(searchTerm) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetMyConversations", undefined, searchTerm.concat("sort=id,desc")),
            RequestMethods.GET).then(res => res);
    }
}