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

    /**
     * 
     * @param {Object} requestInfo 
     * @param {String} captchaToken 
     * @returns {Promise}
     */
    requestBooking(requestInfo, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("RequestBooking"),
            RequestMethods.POST, requestInfo, captchaToken).then(res => res);
    }

    /**
     * 
     * @param {Object} listingObj 
     * @returns {Promise}
     */
    changeListingStatus(listingObj) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("ChangeListingStatus"),
            RequestMethods.POST, listingObj).then(res => res);
    }

    /**
     * 
     * @param {Object} listingObj 
     * @param {String} captchaToken 
     * @returns {Promise}
     */
    createListingProgress(listingObj, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("CreateListingProgress"),
            RequestMethods.POST, listingObj, captchaToken).then(res => res);
    }

    getTopListings() {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetTopListings"),
            RequestMethods.GET).then(res => res);
    }

    /**
     * 
     * @param {Number} id
     * @returns {Promise} 
     */
    getListingProgress(id) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetListingProgress", [id]),
            RequestMethods.GET).then(res => res);
    }

    getMyListingById(id) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetMyListingById", [id]),
            RequestMethods.GET).then(res => res);
    }

    verifyUserEmail(search) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("VerifyUserEmail", [search]),
            RequestMethods.GET).then(res => res);
    }

    saveAirdropSocialProfile(media, profile) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("SaveAirdropSocialProfile", [media]),
            RequestMethods.POST, profile).then(res => res);
    }

    verifyUserAirdropInfo(token) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("VerifyUserAirdropInfo", [token]),
            RequestMethods.POST).then(res => res);
    }

    getPropertyTypes() {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetPropertyTypes"),
            RequestMethods.GET).then(res => res);
    }

    getAmenitiesByCategory() {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetAmenitiesByCategory"),
            RequestMethods.GET).then(res => res);
    }

    changeMessageStatus(conversationObj) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("ChangeMessageStatus"),
            RequestMethods.POST, conversationObj).then(res => res);
    }

    getCountOfUnreadMessages() {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetCountOfMyUnreadMessages"),
            RequestMethods.GET).then(res => res);
    }

    updateUserInfo(userObj, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("UpdateUserInfo"),
            RequestMethods.POST, userObj, captchaToken).then(res => res);
    }

    updateListingProgress(id, listingObj, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("UpdateListingProgress", [id]),
            RequestMethods.POST, listingObj, captchaToken).then(res => res);
    }

    deleteInProgressListing(id) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("DeleteInProgressListing", [id]),
            RequestMethods.DELETE).then(res => res);
    }

    editListing(id, listingObj, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("EditListing", [id]),
            RequestMethods.POST, listingObj, captchaToken).then(res => res);
    }

    getMyListingsInProgress(searchTerm) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetMyListingsInProgress", undefined, searchTerm.concat("sort=id,desc")),
            RequestMethods.GET).then(res => res);
    }

    sendNewPassword(postObj, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("SendNewPassword"),
            RequestMethods.POST, postObj, captchaToken).then(res => res);
    }
}