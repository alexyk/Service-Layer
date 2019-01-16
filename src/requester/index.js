import RequestEndpoints from './RequestEndpoints';
import RequestMethods from './RequestMethods';
import RequestParams from './RequestParams';
import RequestSender from './RequestSender';

export default class Requester {
  constructor(storage, config, headers = {}) {
    this._requestSender = new RequestSender(storage, config, headers);
    this._requestEndpoints = new RequestEndpoints(config);
  }

  /**
   * 
   * @param {Object} userObj 
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
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
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
   */
  login(userObj, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("Login"),
      RequestMethods.POST,
      userObj,
      captchaToken).then(res => res);
  }

  /**
   * 
   * @returns {Promise}
   * 
   */
  getCurrencies() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetCurrencies"),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Number} id
   * @returns {Promise}
   *  
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
   * @returns {Promise}
   * 
   */
  getChatMessages(id, page = 0) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetChatMessages", [id, page]),
      RequestMethods.GET).then(res => res);
  }

  /**
   *
   * @param {Array} searchTerm 
   * @returns {Promise}
   * 
   */
  getMyConversations(searchTerm) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetMyConversations", undefined, ["sort=id,desc"].concat(searchTerm)),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Object} requestInfo 
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
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
   * 
   */
  changeListingStatus(listingObj) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("ChangeListingStatus"),
      RequestMethods.POST, listingObj).then(res => res);
  }

  /**
   * 
   * @param {Object} listingObj 
   * @returns {Promise}
   * 
   */
  changeUserStatus(userObj) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("ChangeUserStatus"),
      RequestMethods.POST, userObj).then(res => res);
  }

  /**
   * 
   * @param {Object} listingObj 
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
   */
  createListingProgress(listingObj, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("CreateListingProgress"),
      RequestMethods.POST, listingObj, captchaToken).then(res => res);
  }

  /**
   * 
   * @returns {Promise}
   * 
   */
  getTopListings() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetTopListings"),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Number} id
   * @returns {Promise} 
   * 
   */
  getListingProgress(id) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetListingProgress", [id]),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Number} id
   * @returns {Promise}
   *  
   */
  getMyListingById(id) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetMyListingById", [id]),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {String} search
   * @returns {Promise}
   *  
   */
  verifyUserEmail(search) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("VerifyUserEmail", [search]),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {String} voteUrl 
   * @returns {Promise}
   * 
   */
  editAirdropVoteUrl(voteUrl) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("EditAirdropVoteUrl"),
      RequestMethods.POST, voteUrl).then(res => res);
  }

  /**
   * 
   * @param {String} media 
   * @param {String} profile 
   * @returns {Promise}
   * 
   */
  saveAirdropSocialProfile(media, profile) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("SaveAirdropSocialProfile", [media]),
      RequestMethods.POST, profile).then(res => res);
  }

  /**
   * 
   * @param {String} token
   * @returns {Promise}
   *  
   */
  verifyUserAirdropInfo(token) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("VerifyUserAirdropInfo", [token]),
      RequestMethods.POST).then(res => res);
  }

  /**
   * 
   * @returns {Promise}
   * 
   */
  getPropertyTypes() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetPropertyTypes"),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @returns {Promise}
   * 
   */
  getAmenitiesByCategory() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetAmenitiesByCategory"),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Object} conversationObj 
   * @returns {Promise}
   * 
   */
  changeMessageStatus(conversationObj) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("ChangeMessageStatus"),
      RequestMethods.POST, conversationObj).then(res => res);
  }

  /**
   * 
   * @returns {Promise}
   * 
   */
  getCountOfMyUnreadMessages() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetCountOfMyUnreadMessages"),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Object} userObj 
   * @param {String} captchaToken 
   * @return {Promise}
   * 
   */
  updateUserInfo(userObj, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("UpdateUserInfo"),
      RequestMethods.POST, userObj, captchaToken).then(res => res);
  }

  /**
   * 
   * @param {Number} id 
   * @param {Object} listingObj 
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
   */
  updateListingProgress(id, listingObj, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("UpdateListingProgress", [id]),
      RequestMethods.POST, listingObj, captchaToken).then(res => res);
  }

  /**
   * 
   * @param {Number} id 
   * @returns {Promise}
   * 
   */
  deleteInProgressListing(id) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("DeleteInProgressListing", [id]),
      RequestMethods.DELETE).then(res => res);
  }

  /**
   * 
   * @param {Number} id 
   * @param {Object} listingObj 
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
   */
  editListing(id, listingObj, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("EditListing", [id]),
      RequestMethods.POST, listingObj, captchaToken).then(res => res);
  }

  /**
   * 
   * @param {Number} id
   * @returns {Promise}
   *  
   */
  getHotelPictures(id) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetHotelPictures", [id]),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Array} searchTerm 
   * @returns {Promise}
   * 
   */
  getMyListingsInProgress(searchTerm) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetMyListingsInProgress", undefined, ["sort=id,desc"].concat(searchTerm)),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Object} postObj 
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
   */
  sendNewPassword(postObj, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("SendNewPassword"),
      RequestMethods.POST, postObj, captchaToken).then(res => res);
  }

  /**
   * 
   * @param {Number} bookingId 
   * @returns {Promise}
   * 
   */
  getCancellationFees(bookingId) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetCancellationFees", [bookingId]),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @returns {Promise}
   * 
   */
  resendConfirmationEmail() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("ResendConfirmationEmail"),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {String} token 
   * @returns {Promise}
   * 
   */
  checkIfAirdropUserExists(token) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("CheckIfAirdropUserExists", [token]),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Array} searchTerm 
   * @param {Number} size 
   * @returns {Promise}
   * 
   */
  getMyHotelBookings(searchTerm, size = 10) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetMyHotelBookings", undefined, ["sort=id,desc", `size=${size}`].concat(searchTerm)),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Number} id
   * @returns {Promise} 
   * 
   */
  getRegionNameById(id) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetRegionNameById", [id]),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @returns {Promise}
   * 
   */
  getMyJsonFile() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetMyJsonFile"),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Object} bookingObj
   * @returns {Promise}
   * 
   */
  cancelBooking(bookingObj) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("CancelBooking"),
      RequestMethods.POST, bookingObj).then(res => res);
  }

  /**
   * 
   * @param {Object} bookingObj 
   * @returns {Promise}
   * 
   */
  confirmBooking(bookingObj) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("ConfirmBooking"),
      RequestMethods.POST, bookingObj).then(res => res);
  }

  /**
   * 
   * @param {Array} searchTerm 
   * @returns {Promise}
   * 
   */
  getRegionsBySearchParameter(searchTerm) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetRegionsBySearchParameter", undefined, searchTerm),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {String} token 
   * @returns {Promise}
   * 
   */
  sendRecoveryToken(token) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("SendRecoveryToken", undefined, token),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {String} email 
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
   */
  sendRecoveryEmail(email, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("SendRecoveryEmail"),
      RequestMethods.POST, email, captchaToken).then(res => res);
  }

  /**
   * 
   * @param {Number} id 
   * @param {Object} cancelTripObj 
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
   */
  cancelTrip(id, cancelTripObj, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("CancelTrip", [id]),
      RequestMethods.POST, cancelTripObj, captchaToken).then(res => res);
  }

  /**
   * 
   * @param {Number} id 
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
   */
  acceptReservation(id, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("AcceptReservation", [id]),
      RequestMethods.POST, {}, captchaToken).then(res => res);
  }

  /**
   * 
   * @param {Number} id 
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
   */
  cancelReservation(id, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("CancelReservation", [id]),
      RequestMethods.POST, {}, captchaToken).then(res => res);
  }

  /**
   * 
   * @param {Number} listingId 
   * @param {Object} slotObj 
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
   */
  publishCalendarSlot(listingId, slotObj, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("PublishCalendarSlot", [listingId]),
      RequestMethods.POST, slotObj, captchaToken).then(res => res);
  }

  /**
   * 
   * @param {Array} searchTerm 
   * @param {Number} size 
   * @returns {Promise}
   * 
   */
  getMyTrips(searchTerm, size = 10) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetMyTrips", undefined, ["sort=id,desc", `size=${size}`].concat(searchTerm)),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Array} searchTerm 
   * @param {Number} size 
   * @returns {Promise}
   * 
   */
  getMyReservations(searchTerm, size = 10) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetMyReservations", undefined, ["sort=id,desc", `size=${size}`].concat(searchTerm)),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Array} searchTerm
   * @returns {Promise}
   * 
   */
  getAllUnpublishedListings(searchTerm) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetAllUnpublishedListings", undefined, searchTerm),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Array} searchTerm
   * @returns {Promise}
   * 
   */
  getAllPublishedListings(searchTerm) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetAllPublishedListings", undefined, searchTerm),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Array} searchTerm 
   * @returns {Promise}
   * 
   */
  getAllVerifiedUsers(searchTerm) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetAllVerifiedUsers", undefined, searchTerm),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Array} searchTerm 
   * @returns {Promise}
   * 
   */
  getAllUnverifiedUsers(searchTerm) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetAllUnverifiedUsers", undefined, searchTerm),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {String} email 
   * @returns {Promise}
   * 
   */
  eraseUserByEmail(email) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("EraseUserByEmail"),
      RequestMethods.POST, {email: email}).then(res => res);
  }

  /**
   * 
   * @param {Array} searchTerm 
   * @returns {Promise}
   * 
   */
  getMyListings(searchTerm) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetMyListings", undefined, searchTerm),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Object} messageObj 
   * @param {Number} id 
   * @returns {Promise}
   * 
   */
  sendMessage(messageObj, id) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("SendMessage", [id]),
      RequestMethods.POST, messageObj).then(res => res);
  }

  /**
   * 
   * @param {Object} requestObj
   * @param {String} captchaToken
   * @returns {Promise}
   * 
   */
  requestBooking(requestObj, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("RequestBooking"),
      RequestMethods.POST, requestObj, captchaToken).then(res => res);
  }

  /**
   * 
   * @param {Array} searchTerm 
   * @returns {Promise}
   * 
   */
  getListingsByFilter(searchTerm) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetListingsByFilter", undefined, searchTerm),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Boolean} hasListings 
   * @returns {Promise}
   * 
   */
  getCountries(hasListings = false) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetCountries", undefined, hasListings ? ['hasListings=true', 'size=10000', 'sort=name,asc'] : ['size=10000', 'sort=name,asc']),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Number} countryId
   * @returns {Promise}
   * 
   */
  getStates(countryId) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetStates", [countryId], ['sort=name,asc']),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Number} countryId 
   * @param {Boolean} hasListings 
   * @returns {Promise}
   * 
   */
  getCities(countryId, hasListings = false) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetCities", [countryId], hasListings ? ['hasListings=true', 'size=10000', 'sort=name,asc'] : ['size=10000', 'sort=name,asc']),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Number} id 
   * @param {Object} priceObj 
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
   */
  editDefaultDailyPrice(id, priceObj, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("EditDefaultDailyPrice", [id]),
      RequestMethods.POST, priceObj, captchaToken).then(res => res);
  }

  /**
   * 
   * @param {Object} listingObj 
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
   */
  createListing(listingObj, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("CreateListing"),
      RequestMethods.POST, listingObj, captchaToken).then(res => res);
  }

  /**
   * 
   * @param {String} currency 
   * @returns {Promise}
   * 
   */
  getLocRateByCurrency(currency) {
    return fetch(`https://api.coinmarketcap.com/v1/ticker/lockchain/?convert=${currency}`).then(res => {
      return {
        body: res.json(),
        success: true
      }
    });
  }

  /**
   * 
   * @param {String} email 
   * @returns {Promise}
   * 
   */
  getEmailFreeResponse(email) {
    email = email || 'info@locktrip.com';
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetEmailFreeResponse", [encodeURIComponent(email.replace(/\./g, '&#46;')).replace(/%26%2346%3B/g, '.')]),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @returns {Promise}
   * 
   */
  getCurrencyRates() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetCurrencyRates"),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Object} bookingObj 
   * @returns {Promise}
   * 
   */
  createReservation(bookingObj) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("CreateReservation"),
      RequestMethods.POST, bookingObj).then(res => res);
  }

  /**
   * 
   * @param {Number} id 
   * @param {Array} searchTerm 
   * @returns {Promise}
   * 
   */
  getHotelRooms(id, searchTerm) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetHotelRooms", [id], searchTerm),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Number} id 
   * @param {Array} searchTerm 
   * @returns {Promise}
   * 
   */
  getHotelById(id, searchTerm) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetHotelById", [id], searchTerm),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @returns {Promise}
   * 
   */
  getUserInfo() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetUserInfo"),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Number} id 
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
   */
  deleteListing(id, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("DeleteListing", [id]),
      RequestMethods.POST, {}, captchaToken).then(res => res);
  }

  /**
   * 
   * @param {Number} id 
   * @param {Object} contactHostObj 
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
   */
  contactHost(id, contactHostObj, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("ContactHost", [id]),
      RequestMethods.POST, contactHostObj, captchaToken).then(res => res);
  }

  /**
   * 
   * @param {Array} searchTerm 
   * @returns {Promise}
   * 
   */
  getCalendarByListingIdAndDateRange(searchTerm) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetCalendarByListingIdAndDateRange", undefined, searchTerm),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @returns {Promise}
   * 
   */
  getUserAirdropInfo() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetUserAirdropInfo"),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {String} searchTerm 
   * @returns {Promise}
   * 
   */
  getMapInfo(searchTerm) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetMapInfo", [searchTerm]),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {String} searchTerm 
   * @param {String} filters 
   * @returns {Promise}
   * 
   */
  getLastSearchHotelResultsByFilter(searchTerm, filters) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetLastSearchHotelResultsByFilter", [searchTerm, filters]),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Number} regionId 
   * @param {Number} page 
   * @returns {Promise}
   * 
   */
  getStaticHotels(regionId, page = 0) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetStaticHotels", [regionId], [`page=${page}`]),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Number} id 
   * @returns {Promise}
   * 
   */
  getHotelBookingDetails(id) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetHotelBookingDetails", [id]),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {String} email 
   * @returns {Promise}
   * 
   */
  getExternalCampaignBalance(email) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetExternalCampaignBalance"),
      RequestMethods.POST, email).then(res => res);
  }

  updateUserAdditionalInfo(userAdditionalInfoObj, captchaToken) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("UpdateUserAdditionalInfo"),
      RequestMethods.POST, userAdditionalInfoObj, captchaToken).then(res => res);
  }

  /**
   * 
   * @param {Object} paymentInfo
   * @returns {Promise}
   * 
   */
  verifyCreditCardPayment(paymentInfo) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("VerifyCreditCardPayment"),
      RequestMethods.POST, paymentInfo).then(res => res);
  }

  /**
   * 
   * @param {String} url
   * @returns {Promise}
   * 
   */
  payWithCreditCard(url) {
    return this._requestSender.sendRequest(
      url,
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {String} url
   * @returns {Promise}
   * 
   */
  getCurrentLocEurRate(url) {
    return this._requestSender.sendRequest(
      url,
      RequestMethods.GET).then(res => res);
  }

  /**
   * @param {Object} emailVerificationRedirectURL
   * @returns {Promise}
   * 
   */
  sendVerificationEmail(emailVerificationRedirectURL) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("SendVerificationEmail"),
      RequestMethods.POST, emailVerificationRedirectURL).then(res => res);
  }

  /**
   * 
   * @param {Object} emailVerificationSecurityCode
   * @returns {Promise}
   * 
   */
  verifyEmailSecurityCode(emailVerificationSecurityCode) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("VerifyEmailSecurityCode"),
      RequestMethods.POST, emailVerificationSecurityCode).then(res => res);
  }

  /**
   *
   * @returns {Promise}
   * 
   */
  getTopHotels() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetTopHotels"),
      RequestMethods.GET).then(res => res);
  }

  /**
   *
   * @returns {Promise}
   * 
   */
  getHomeBookingDetails(id) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetHomeBookingDetails", [id]),
      RequestMethods.GET).then(res => res);
  }

  /**
   *
   * @returns {Promise}
   * 
   */
  getQuoteIdExpirationFlag(id) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetQuoteIdExpirationFlag", [id]),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Number} id
   * @param {Object} quoteIdObj
   * @returns {Promise}
   * 
   */
  markQuoteIdAsLocked(id, quoteIdObj) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("MarkQuoteIdAsLocked", [id]),
      RequestMethods.POST, quoteIdObj).then(res => res);
  }

  /**
   * 
   * @param {Object} booking
   * @returns {Promise}
   * 
   */
  quoteBooking(booking) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("QuoteBooking"),
      RequestMethods.POST, booking).then(res => res);
  }

  /**
   * 
   * @returns {Promise}
   * 
   */
  withdrawTokensFromAirdrop() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("WithdrawTokensFromAirdrop"),
      RequestMethods.POST).then(res => res);
  }

  /**
   * 
   * @returns {Promise}
   * 
   */
  checkIfAirdropUserIsVerified() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("CheckIfAirdropUserIsVerified"),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @returns {Promise}
   * 
   */
  checkIfAirdropWithdrawHasStarted() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("CheckIfAirdropWithdrawHasStarted"),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @returns {Promise}
   * 
   */
  getAirdropLocRate() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetAirdropLocRate"),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Object} locRate
   * @returns {Promise}
   * 
   */
  updateAirdropLocRate(locRate) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("UpdateAirdropLocRate"),
      RequestMethods.POST, locRate).then(res => res);
  }

  /**
   * 
   * @returns {Promise}
   * 
   */
  getConfigVars() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetConfigVars"),
      RequestMethods.GET).then(res => res);
  }

  /**
  * 
  * @param {String} variable
  * @returns {Promise}
  * 
  */
  getConfigVarByName(variable) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetConfigVarByName", [variable]),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {Array} configVars
   * @returns {Promise}
   * 
   */
  updateConfigVars(configVars) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("UpdateConfigVars"),
      RequestMethods.POST, configVars).then(res => res);
  }

  /**
   * 
   * @param {Array} searchTerm 
   * @returns {Promise}
   * 
   */
  getAllBookingsWithTransactionHash(searchTerm) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetAllBookingsWithTransactionHash", undefined, searchTerm),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {String} id
   * @returns {Promise}
   * 
   */
  getBookingWithTransactionHashById(id) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetBookingWithTransactionHashById", [id]),
      RequestMethods.GET).then(res => res);
  }

  /**
   * 
   * @param {String} id
   * @param {Object} booking
   * @returns {Promise}
   * 
   */
  updateBookingWithTransaction(id, booking) {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("UpdateBookingWithTransaction", [id]),
      RequestMethods.POST, booking).then(res => res);
  }

  /**
   *
   * @returns {Promise}
   * 
   */
  getUserHasPendingBooking() {
    return this._requestSender.sendRequest(
      this._requestEndpoints.GetRoute("GetUserHasPendingBooking"),
      RequestMethods.GET).then(res => res);
  }
}