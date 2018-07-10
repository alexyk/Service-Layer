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

    getCountOfMyUnreadMessages() {
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

    getCancellationFees(bookingId) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetCancellationFees", [bookingId]),
            RequestMethods.GET).then(res => res);
    }

    resendConfirmationEmail() {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("ResendConfirmationEmail"),
            RequestMethods.GET).then(res => res);
    }

    checkIfAirdropUserExists(token) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("CheckIfAirdropUserExists", [token]),
            RequestMethods.GET).then(res => res);
    }

    getMyHotelBookings(searchTerm, size = 10) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetMyHotelBookings", undefined, searchTerm.concat(["sort=id,desc", `size=${size}`])),
            RequestMethods.GET).then(res => res);
    }

    getRegionNameById(id) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetRegionNameById", [id]),
            RequestMethods.GET).then(res => res);
    }

    getMyJsonFile() {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetMyJsonFile"),
            RequestMethods.GET).then(res => res);
    }

    cancelBooking(bookingObj) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("CancelBooking"),
            RequestMethods.POST, bookingObj).then(res => res);
    }

    confirmBooking(bookingObj) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("ConfirmBooking"),
            RequestMethods.POST, bookingObj).then(res => res);
    }

    getRegionsBySearchParameter(searchTerm) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetRegionsBySearchParameter", undefined, [`query=${searchTerm}`]),
            RequestMethods.GET).then(res => res);
    }

    sendRecoveryToken(token) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("SendRecoveryToken", undefined, [`token=${token}`]),
            RequestMethods.GET).then(res => res);
    }

    sendRecoveryEmail(email, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("SendRecoveryEmail"),
            RequestMethods.POST, email, captchaToken).then(res => res);
    }

    cancelTrip(id, cancelTripObj, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("CancelTrip", [id]),
            RequestMethods.POST, cancelTripObj, captchaToken).then(res => res);
    }

    acceptReservation(id, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("AcceptReservation", [id]),
            RequestMethods.POST, {}, captchaToken).then(res => res);
    }

    cancelReservation(id, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("CancelReservation", [id]),
            RequestMethods.POST, {}, captchaToken).then(res => res);
    }

    publishCalendarSlot(listingId, slotObj, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("PublishCalendarSlot", [id]),
            RequestMethods.POST, slotObj, captchaToken).then(res => res);
    }

    getMyTrips(searchTerm, size = 10) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetMyTrips", undefined, searchTerm.concat(["sort=id,desc", `size=${size}`])),
            RequestMethods.GET).then(res => res);
    }

    getMyReservations(searchTerm, size = 10) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetMyReservations", undefined, ["sort=id,desc", `size=${size}`].concat(searchTerm)),
            RequestMethods.GET).then(res => res);
    }

    getAllUnpublishedListings(searchTerm) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetAllUnpublishedListings", undefined, searchTerm),
            RequestMethods.GET).then(res => res);
    }

    getAllPublishedListings(searchTerm) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetAllPublishedListings", undefined, searchTerm),
            RequestMethods.GET).then(res => res);
    }

    getMyListings(searchTerm) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetMyListings", undefined, searchTerm),
            RequestMethods.GET).then(res => res);
    }

    sendMessage(messageObj, id) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("SendMessage", [id]),
            RequestMethods.POST.messageObj).then(res => res);
    }

    requestBooking(requestObj, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("RequestBooking"),
            RequestMethods.POST, requestObj, captchaToken).then(res => res);
    }

    getListingsByFilter(searchTerm) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetListingsByFilter", undefined, searchTerm),
            RequestMethods.GET).then(res => res);
    }

    getCountries(hasListings = false) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetCountries", undefined, hasListings ? ['hasListings=true', 'size=10000', 'sort=name,asc'] : ['size=10000', 'sort=name,asc']),
            RequestMethods.GET).then(res => res);
    }

    getCities(countryId, hasListings = false) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetCities", [countryId], hasListings ? ['hasListings=true', 'size=10000', 'sort=name,asc'] : ['size=10000', 'sort=name,asc']),
            RequestMethods.GET).then(res => res);
    }

    editDefaultDailyPrice(id, priceObj, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("EditDefaultDailyPrice", [id]),
            RequestMethods.POST, priceObj, captchaToken).then(res => res);
    }

    createListing(listingObj, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("CreateListing"),
            RequestMethods.POST, listingObj, captchaToken).then(res => res);
    }

    getLocRateByCurrency(currency) {
        return fetch(`https://api.coinmarketcap.com/v1/ticker/lockchain/?convert=${currency}`).then(res => {
            return {
                body: res.json(),
                success: true
            }
        });
    }

    getEmailFreeResponse(email) {
        email = email || 'info@locktrip.com';
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetEmailFreeResponse", [encodeURIComponent(email.replace(/\./g, '&#46;')).replace(/%26%2346%3B/g, '.')]),
            RequestMethods.GET).then(res => res);
    }

    getCurrencyRates() {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetCurrencyRates"),
            RequestMethods.GET).then(res => res);
    }

    createReservation(bookingObj) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("CreateReservation"),
            RequestMethods.POST, bookingObj).then(res => res);
    }

    getHotelRooms(id, searchTerm) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetHotelRooms", [id], searchTerm),
            RequestMethods.GET).then(res => res);
    }

    getHotelById(id, searchTerm) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetHotelById", [id], searchTerm),
            RequestMethods.GET).then(res => res);
    }

    getUserInfo() {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetUserInfo"),
            RequestMethods.GET).then(res => res);
    }

    deleteListing(id, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("DeleteListing", [id]),
            RequestMethods.POST, {}, captchaToken).then(res => res);
    }

    contactHost(id, contactHostObj, captchaToken) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("ContactHost"),
            RequestMethods.POST, contactHostObj, captchaToken).then(res => res);
    }

    getCalendarByListingIdAndDateRange(searchTerm) {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetCalendarByListingIdAndDateRange", undefined, searchTerm),
            RequestMethods.GET).then(res => res);
    }

    getUserAirdropInfo() {
        return this._requestSender.sendRequest(
            this._requestEndpoints.GetRoute("GetUserAirdropInfo"),
            RequestMethods.GET).then(res => res);
    }
}