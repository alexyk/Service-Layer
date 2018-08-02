'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RequestEndpoints = require('./RequestEndpoints');

var _RequestEndpoints2 = _interopRequireDefault(_RequestEndpoints);

var _RequestMethods = require('./RequestMethods');

var _RequestMethods2 = _interopRequireDefault(_RequestMethods);

var _RequestParams = require('./RequestParams');

var _RequestParams2 = _interopRequireDefault(_RequestParams);

var _RequestSender = require('./RequestSender');

var _RequestSender2 = _interopRequireDefault(_RequestSender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Requester = function () {
  function Requester(storage, config) {
    var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Requester);

    this._requestSender = new _RequestSender2.default(storage, config, headers);
    this._requestEndpoints = new _RequestEndpoints2.default(config);
  }

  /**
   * 
   * @param {Object} userObj 
   * @param {String} captchaToken 
   * @returns {Promise}
   * 
   */


  _createClass(Requester, [{
    key: 'register',
    value: function register(userObj, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("Register"), _RequestMethods2.default.POST, userObj, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Object} userObj 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'login',
    value: function login(userObj, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("Login"), _RequestMethods2.default.POST, userObj, null, {}).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getCurrencies',
    value: function getCurrencies() {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetCurrencies"), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id
     * @returns {Promise}
     *  
     */

  }, {
    key: 'getListing',
    value: function getListing(id) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetListing", [id]), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id 
     * @param {Number} page 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getChatMessages',
    value: function getChatMessages(id) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetChatMessages", [id, page]), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     *
     * @param {Array} searchTerm 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getMyConversations',
    value: function getMyConversations(searchTerm) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetMyConversations", undefined, ["sort=id,desc"].concat(searchTerm)), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Object} requestInfo 
     * @param {String} captchaToken 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'requestBooking',
    value: function requestBooking(requestInfo, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("RequestBooking"), _RequestMethods2.default.POST, requestInfo, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Object} listingObj 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'changeListingStatus',
    value: function changeListingStatus(listingObj) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("ChangeListingStatus"), _RequestMethods2.default.POST, listingObj).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Object} listingObj 
     * @param {String} captchaToken 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'createListingProgress',
    value: function createListingProgress(listingObj, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("CreateListingProgress"), _RequestMethods2.default.POST, listingObj, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getTopListings',
    value: function getTopListings() {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetTopListings"), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id
     * @returns {Promise} 
     * 
     */

  }, {
    key: 'getListingProgress',
    value: function getListingProgress(id) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetListingProgress", [id]), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id
     * @returns {Promise}
     *  
     */

  }, {
    key: 'getMyListingById',
    value: function getMyListingById(id) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetMyListingById", [id]), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {String} search
     * @returns {Promise}
     *  
     */

  }, {
    key: 'verifyUserEmail',
    value: function verifyUserEmail(search) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("VerifyUserEmail", [search]), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {String} voteUrl 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'editAirdropVoteUrl',
    value: function editAirdropVoteUrl(voteUrl) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("EditAirdropVoteUrl"), _RequestMethods2.default.POST, voteUrl).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {String} media 
     * @param {String} profile 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'saveAirdropSocialProfile',
    value: function saveAirdropSocialProfile(media, profile) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("SaveAirdropSocialProfile", [media]), _RequestMethods2.default.POST, profile).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {String} token
     * @returns {Promise}
     *  
     */

  }, {
    key: 'verifyUserAirdropInfo',
    value: function verifyUserAirdropInfo(token) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("VerifyUserAirdropInfo", [token]), _RequestMethods2.default.POST).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getPropertyTypes',
    value: function getPropertyTypes() {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetPropertyTypes"), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getAmenitiesByCategory',
    value: function getAmenitiesByCategory() {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetAmenitiesByCategory"), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Object} conversationObj 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'changeMessageStatus',
    value: function changeMessageStatus(conversationObj) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("ChangeMessageStatus"), _RequestMethods2.default.POST, conversationObj).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getCountOfMyUnreadMessages',
    value: function getCountOfMyUnreadMessages() {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetCountOfMyUnreadMessages"), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Object} userObj 
     * @param {String} captchaToken 
     * @return {Promise}
     * 
     */

  }, {
    key: 'updateUserInfo',
    value: function updateUserInfo(userObj, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("UpdateUserInfo"), _RequestMethods2.default.POST, userObj, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id 
     * @param {Object} listingObj 
     * @param {String} captchaToken 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'updateListingProgress',
    value: function updateListingProgress(id, listingObj, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("UpdateListingProgress", [id]), _RequestMethods2.default.POST, listingObj, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'deleteInProgressListing',
    value: function deleteInProgressListing(id) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("DeleteInProgressListing", [id]), _RequestMethods2.default.DELETE).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id 
     * @param {Object} listingObj 
     * @param {String} captchaToken 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'editListing',
    value: function editListing(id, listingObj, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("EditListing", [id]), _RequestMethods2.default.POST, listingObj, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Array} searchTerm 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getMyListingsInProgress',
    value: function getMyListingsInProgress(searchTerm) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetMyListingsInProgress", undefined, ["sort=id,desc"].concat(searchTerm)), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Object} postObj 
     * @param {String} captchaToken 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'sendNewPassword',
    value: function sendNewPassword(postObj, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("SendNewPassword"), _RequestMethods2.default.POST, postObj, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} bookingId 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getCancellationFees',
    value: function getCancellationFees(bookingId) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetCancellationFees", [bookingId]), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'resendConfirmationEmail',
    value: function resendConfirmationEmail() {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("ResendConfirmationEmail"), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {String} token 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'checkIfAirdropUserExists',
    value: function checkIfAirdropUserExists(token) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("CheckIfAirdropUserExists", [token]), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Array} searchTerm 
     * @param {Number} size 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getMyHotelBookings',
    value: function getMyHotelBookings(searchTerm) {
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetMyHotelBookings", undefined, ["sort=id,desc", 'size=' + size].concat(searchTerm)), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id
     * @returns {Promise} 
     * 
     */

  }, {
    key: 'getRegionNameById',
    value: function getRegionNameById(id) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetRegionNameById", [id]), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getMyJsonFile',
    value: function getMyJsonFile() {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetMyJsonFile"), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Object} bookingObj
     * @returns {Promise}
     * 
     */

  }, {
    key: 'cancelBooking',
    value: function cancelBooking(bookingObj) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("CancelBooking"), _RequestMethods2.default.POST, bookingObj).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Object} bookingObj 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'confirmBooking',
    value: function confirmBooking(bookingObj) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("ConfirmBooking"), _RequestMethods2.default.POST, bookingObj).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Array} searchTerm 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getRegionsBySearchParameter',
    value: function getRegionsBySearchParameter(searchTerm) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetRegionsBySearchParameter", undefined, searchTerm), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {String} token 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'sendRecoveryToken',
    value: function sendRecoveryToken(token) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("SendRecoveryToken", undefined, token), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {String} email 
     * @param {String} captchaToken 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'sendRecoveryEmail',
    value: function sendRecoveryEmail(email, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("SendRecoveryEmail"), _RequestMethods2.default.POST, email, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id 
     * @param {Object} cancelTripObj 
     * @param {String} captchaToken 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'cancelTrip',
    value: function cancelTrip(id, cancelTripObj, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("CancelTrip", [id]), _RequestMethods2.default.POST, cancelTripObj, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id 
     * @param {String} captchaToken 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'acceptReservation',
    value: function acceptReservation(id, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("AcceptReservation", [id]), _RequestMethods2.default.POST, {}, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id 
     * @param {String} captchaToken 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'cancelReservation',
    value: function cancelReservation(id, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("CancelReservation", [id]), _RequestMethods2.default.POST, {}, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} listingId 
     * @param {Object} slotObj 
     * @param {String} captchaToken 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'publishCalendarSlot',
    value: function publishCalendarSlot(listingId, slotObj, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("PublishCalendarSlot", [id]), _RequestMethods2.default.POST, slotObj, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Array} searchTerm 
     * @param {Number} size 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getMyTrips',
    value: function getMyTrips(searchTerm) {
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetMyTrips", undefined, ["sort=id,desc", 'size=' + size].concat(searchTerm)), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Array} searchTerm 
     * @param {Number} size 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getMyReservations',
    value: function getMyReservations(searchTerm) {
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetMyReservations", undefined, ["sort=id,desc", 'size=' + size].concat(searchTerm)), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Array} searchTerm
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getAllUnpublishedListings',
    value: function getAllUnpublishedListings(searchTerm) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetAllUnpublishedListings", undefined, searchTerm), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Array} searchTerm
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getAllPublishedListings',
    value: function getAllPublishedListings(searchTerm) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetAllPublishedListings", undefined, searchTerm), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Array} searchTerm 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getMyListings',
    value: function getMyListings(searchTerm) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetMyListings", undefined, searchTerm), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Object} messageObj 
     * @param {Number} id 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'sendMessage',
    value: function sendMessage(messageObj, id) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("SendMessage", [id]), _RequestMethods2.default.POST, messageObj).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Object} requestObj
     * @param {String} captchaToken
     * @returns {Promise}
     * 
     */

  }, {
    key: 'requestBooking',
    value: function requestBooking(requestObj, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("RequestBooking"), _RequestMethods2.default.POST, requestObj, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Array} searchTerm 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getListingsByFilter',
    value: function getListingsByFilter(searchTerm) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetListingsByFilter", undefined, searchTerm), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Boolean} hasListings 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getCountries',
    value: function getCountries() {
      var hasListings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetCountries", undefined, hasListings ? ['hasListings=true', 'size=10000', 'sort=name,asc'] : ['size=10000', 'sort=name,asc']), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} countryId 
     * @param {Boolean} hasListings 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getCities',
    value: function getCities(countryId) {
      var hasListings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetCities", [countryId], hasListings ? ['hasListings=true', 'size=10000', 'sort=name,asc'] : ['size=10000', 'sort=name,asc']), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id 
     * @param {Object} priceObj 
     * @param {String} captchaToken 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'editDefaultDailyPrice',
    value: function editDefaultDailyPrice(id, priceObj, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("EditDefaultDailyPrice", [id]), _RequestMethods2.default.POST, priceObj, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Object} listingObj 
     * @param {String} captchaToken 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'createListing',
    value: function createListing(listingObj, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("CreateListing"), _RequestMethods2.default.POST, listingObj, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {String} currency 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getLocRateByCurrency',
    value: function getLocRateByCurrency(currency) {
      return fetch('https://api.coinmarketcap.com/v1/ticker/lockchain/?convert=' + currency).then(function (res) {
        return {
          body: res.json(),
          success: true
        };
      });
    }

    /**
     * 
     * @param {String} email 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getEmailFreeResponse',
    value: function getEmailFreeResponse(email) {
      email = email || 'info@locktrip.com';
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetEmailFreeResponse", [encodeURIComponent(email.replace(/\./g, '&#46;')).replace(/%26%2346%3B/g, '.')]), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getCurrencyRates',
    value: function getCurrencyRates() {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetCurrencyRates"), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Object} bookingObj 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'createReservation',
    value: function createReservation(bookingObj) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("CreateReservation"), _RequestMethods2.default.POST, bookingObj).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id 
     * @param {Array} searchTerm 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getHotelRooms',
    value: function getHotelRooms(id, searchTerm) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetHotelRooms", [id], searchTerm), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id 
     * @param {Array} searchTerm 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getHotelById',
    value: function getHotelById(id, searchTerm) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetHotelById", [id], searchTerm), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getUserInfo',
    value: function getUserInfo() {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetUserInfo"), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id 
     * @param {String} captchaToken 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'deleteListing',
    value: function deleteListing(id, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("DeleteListing", [id]), _RequestMethods2.default.POST, {}, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id 
     * @param {Object} contactHostObj 
     * @param {String} captchaToken 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'contactHost',
    value: function contactHost(id, contactHostObj, captchaToken) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("ContactHost"), _RequestMethods2.default.POST, contactHostObj, captchaToken).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Array} searchTerm 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getCalendarByListingIdAndDateRange',
    value: function getCalendarByListingIdAndDateRange(searchTerm) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetCalendarByListingIdAndDateRange", undefined, searchTerm), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getUserAirdropInfo',
    value: function getUserAirdropInfo() {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetUserAirdropInfo"), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {String} searchTerm 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getMapInfo',
    value: function getMapInfo(searchTerm) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetMapInfo", [searchTerm]), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {String} searchTerm 
     * @param {String} filters 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getStaticHotelsByFilter',
    value: function getStaticHotelsByFilter(searchTerm, filters) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetStaticHotelsByFilter", [searchTerm, filters]), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} regionId 
     * @param {Number} page 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getStaticHotels',
    value: function getStaticHotels(regionId) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetStaticHotels", [regionId], ['page=' + page]), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {Number} id 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getHotelBookingDetails',
    value: function getHotelBookingDetails(id) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetHotelBookingDetails", [id]), _RequestMethods2.default.GET).then(function (res) {
        return res;
      });
    }

    /**
     * 
     * @param {String} email 
     * @returns {Promise}
     * 
     */

  }, {
    key: 'getExternalCampaignBalance',
    value: function getExternalCampaignBalance(email) {
      return this._requestSender.sendRequest(this._requestEndpoints.GetRoute("GetExternalCampaignBalance"), _RequestMethods2.default.POST, email).then(function (res) {
        return res;
      });
    }
  }]);

  return Requester;
}();

exports.default = Requester;