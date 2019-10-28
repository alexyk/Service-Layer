"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RequestEndpoints =
/*#__PURE__*/
function () {
  function RequestEndpoints(config) {
    _classCallCheck(this, RequestEndpoints);

    var apiHost = config.apiHost;
    this.routes = {
      Register: "".concat(apiHost, "/auth/signup"),
      Login: "".concat(apiHost, "/auth/login"),
      Oauth2Facebook: "".concat(apiHost, "/oauth2/authorize/facebook"),
      Oauth2Google: "".concat(apiHost, "/oauth2/authorize/google"),
      Oauth2Twitter: "".concat(apiHost, "/auth/authorize/twitter"),
      GetCurrencies: "".concat(apiHost, "/currencies"),
      RequestBooking: "".concat(apiHost, "/reservations/request"),
      ChangeListingStatus: "".concat(apiHost, "/admin/listings/state"),
      ChangeUserStatus: "".concat(apiHost, "/admin/users/verify"),
      CreateListingProgress: "".concat(apiHost, "/listings/progress"),
      GetTopListings: "".concat(apiHost, "/listings/top"),
      CreateListing: "".concat(apiHost, "/listings"),
      GetAmenitiesByCategory: "".concat(apiHost, "/categories"),
      GetPropertyTypes: "".concat(apiHost, "/property_types"),
      GetCurrencyRates: "".concat(apiHost, "/rates"),
      ResendConfirmationEmail: "".concat(apiHost, "/airdrop/sendVerifyEmailLink"),
      GetUserAirdropInfo: "".concat(apiHost, "/airdrop"),
      SendRecoveryEmail: "".concat(apiHost, "/users/resetPassword/token"),
      SendNewPassword: "".concat(apiHost, "/users/resetPassword/change"),
      CancelBooking: "".concat(apiHost, "/hotels/booking/cancel"),
      ConfirmBooking: "".concat(apiHost, "/hotels/booking/confirm"),
      CreateReservation: "".concat(apiHost, "/hotels/booking"),
      UpdateUserInfo: "".concat(apiHost, "/users/me"),
      GetUserInfo: "".concat(apiHost, "/users/me/info"),
      GetMyJsonFile: "".concat(apiHost, "/users/me/jsonFile"),
      GetCountOfMyUnreadMessages: "".concat(apiHost, "/users/me/messages/count"),
      ChangeMessageStatus: "".concat(apiHost, "/users/me/conversations"),
      EditAirdropVoteUrl: "".concat(apiHost, "/airdrop/editVoteUrl"),
      UpdateUserAdditionalInfo: "".concat(apiHost, "/users/me/identity"),
      VerifyCreditCardPayment: "".concat(apiHost, "/payment/creditcard"),
      GetTopHotels: "".concat(apiHost, "/hotels/top"),
      SendVerificationEmail: "".concat(apiHost, "/users/me/sendEmailVerification"),
      VerifyEmailSecurityCode: "".concat(apiHost, "/users/me/checkingEmailVerificationSecurityCode"),
      QuoteBooking: "".concat(apiHost, "/hotels/booking/quote"),
      WithdrawTokensFromAirdrop: "".concat(apiHost, "/airdrop/withdraw"),
      CheckIfAirdropUserIsVerified: "".concat(apiHost, "/airdrop/verified"),
      CheckIfAirdropWithdrawHasStarted: "".concat(apiHost, "/airdrop/withdraw/started"),
      GetAirdropLocRate: "".concat(apiHost, "/admin/loc/rate"),
      UpdateAirdropLocRate: "".concat(apiHost, "/admin/loc/rate"),
      GetConfigVars: "".concat(apiHost, "/admin/configVars"),
      UpdateConfigVars: "".concat(apiHost, "/admin/configVars/changing"),
      // Parameter only
      GetListing: "".concat(apiHost, "/listings/{0}"),
      GetChatMessages: "".concat(apiHost, "/users/me/conversations/{0}?page={1}"),
      GetListingProgress: "".concat(apiHost, "/listings/{0}/progress"),
      GetMyListingById: "".concat(apiHost, "/me/listings/{0}"),
      VerifyUserEmail: "".concat(apiHost, "/airdrop/verifyEmail{0}"),
      SaveAirdropSocialProfile: "".concat(apiHost, "/me/social/{0}"),
      VerifyUserAirdropInfo: "".concat(apiHost, "/airdrop/participate/{0}"),
      UpdateListingProgress: "".concat(apiHost, "/listings/{0}/progress"),
      EditListing: "".concat(apiHost, "/me/listings/{0}/edit"),
      DeleteInProgressListing: "".concat(apiHost, "/listings/{0}/progress"),
      GetCancellationFees: "".concat(apiHost, "/hotels/booking/{0}/cancellationFee"),
      CheckIfAirdropUserExists: "".concat(apiHost, "/userExists/{0}"),
      CancelTrip: "".concat(apiHost, "/trips/{0}/cancel"),
      AcceptReservation: "".concat(apiHost, "/reservations/{0}/accept"),
      CancelReservation: "".concat(apiHost, "/reservations/{0}/cancel"),
      PublishCalendarSlot: "".concat(apiHost, "/listings/{0}/calendar"),
      SendMessage: "".concat(apiHost, "/users/me/conversations/{0}"),
      EditDefaultDailyPrice: "".concat(apiHost, "/listings/{0}/dailyPrice"),
      GetEmailFreeResponse: "".concat(apiHost, "/users/email/{0}/"),
      DeleteListing: "".concat(apiHost, "/me/listings/{0}/delete"),
      ContactHost: "".concat(apiHost, "/listings/{0}/conversations"),
      GetRegionNameById: "".concat(apiHost, "/regions/{0}/name"),
      GetMapInfo: "".concat(apiHost, "/hotels/filtered/map{0}"),
      GetLastSearchHotelResultsByFilter: "".concat(apiHost, "/hotels/filtered{0}{1}"),
      GetStaticHotels: "".concat(apiHost, "/regions/{0}"),
      GetStaticHotelsAvailable: "".concat(apiHost, "/regions/{0}"),
      GetHotelBookingDetails: "".concat(apiHost, "/users/me/bookings/{0}"),
      GetExternalCampaignBalance: "".concat(apiHost, "/airdrop/campaigns/balance"),
      GetHotelPictures: "".concat(apiHost, "/hotels/{0}/thumbnails"),
      GetHomeBookingDetails: "".concat(apiHost, "/listings/rooms/{0}"),
      GetQuoteIdExpirationFlag: "".concat(apiHost, "/hotels/rooms/{0}/valid"),
      MarkQuoteIdAsLocked: "".concat(apiHost, "/hotels/rooms/{0}/mark"),
      GetConfigVarByName: "".concat(apiHost, "/application/config/{0}"),
      GetBookingWithTransactionHashById: "".concat(apiHost, "/admin/panel/booking/{0}"),
      UpdateBookingWithTransaction: "".concat(apiHost, "/admin/panel/booking/{0}"),
      GetUserHasPendingBooking: "".concat(apiHost, "/hotels/booking/pending"),
      EraseUserByEmail: "".concat(apiHost, "/admin/users/erase"),
      GetDistanceByHotelId: "".concat(apiHost, "/hotels/{0}/distances"),
      GetHotelAddress: "".concat(apiHost, "/hotels/{0}/address"),
      GetHotelFeatures: "".concat(apiHost, "/hotels/{0}/features"),
      GetNearbyHotelsByHotelId: "".concat(apiHost, "/hotels/{0}/nearbyHotels"),
      GetCancellationPolicyByQuoteId: "".concat(apiHost, "/hotels/{0}/cancellationPolicy"),
      // Query only
      GetMyConversations: "".concat(apiHost, "/users/me/conversations"),
      GetMyListingsInProgress: "".concat(apiHost, "/users/me/listings/incomplete"),
      GetMyHotelBookings: "".concat(apiHost, "/users/me/bookings"),
      GetRegionsBySearchParameter: "".concat(apiHost, "/regions/search"),
      SendRecoveryToken: "".concat(apiHost, "/users/resetPassword/confirm"),
      GetMyTrips: "".concat(apiHost, "/users/me/trips"),
      GetMyReservations: "".concat(apiHost, "/users/me/reservations"),
      GetAllUnpublishedListings: "".concat(apiHost, "/admin/listings/unpublished"),
      GetAllPublishedListings: "".concat(apiHost, "/admin/listings/published"),
      GetMyListings: "".concat(apiHost, "/users/me/listings"),
      GetListingsByFilter: "".concat(apiHost, "/filter_listings"),
      GetCountries: "".concat(apiHost, "/countries"),
      GetCalendarByListingIdAndDateRange: "".concat(apiHost, "/calendars/search/findAllByListingIdAndDateBetween"),
      GetAllUnverifiedUsers: "".concat(apiHost, "/admin/users/unverified"),
      GetAllVerifiedUsers: "".concat(apiHost, "/admin/users/verified"),
      GetAllBookingsWithTransactionHash: "".concat(apiHost, "/admin/panel/booking/all"),
      GetLocRateByCurrency: "".concat(apiHost, "/convert"),
      // Both parameter and query
      GetHotelRooms: "".concat(apiHost, "/hotels/{0}/rooms"),
      GetHotelRoomsUpdated: "".concat(apiHost, "/hotels/{0}/rooms/updated"),
      GetHotelById: "".concat(apiHost, "/hotels/{0}"),
      GetCities: "".concat(apiHost, "/countries/{0}/cities"),
      GetStates: "".concat(apiHost, "/countries/{0}/states"),
      GetStaticSingleHotel: "".concat(apiHost, "/regions/hotel/{0}"),
      GetSearchHotelResults: "".concat(apiHost, "/hotels/search{0}")
    };
  }
  /**
   * 
   * @param {String} routeName 
   * @param {Array} params 
   * @param {Array} query 
   * @returns {String}
   * 
   */


  _createClass(RequestEndpoints, [{
    key: "GetRoute",
    value: function GetRoute(routeName, params, query) {
      var rawRoute = this.routes[routeName];
      var url = rawRoute;

      if (params) {
        url = this.replaceParams(rawRoute, params);
      }

      if (query) {
        url += this.processQuery(query);
      }

      return url;
    }
    /**
     *
     * @param {Array} query
     * @returns {String}
     * 
     */

  }, {
    key: "processQuery",
    value: function processQuery(query) {
      // Remove empty, undefined, null and e.g. items from array
      var filteredQuery = [];

      if (query != undefined) {
        filteredQuery = query.filter(function (e) {
          return e;
        });
      } // Create Key-value pairs


      var queryKvp = '';

      for (var i = 0; i < filteredQuery.length; i++) {
        if (i !== filteredQuery.length - 1) {
          queryKvp += "".concat(filteredQuery[i], "&");
        } else {
          queryKvp += filteredQuery[i];
        }
      } // Build final query


      var finalQuery = "?".concat(queryKvp);
      return finalQuery;
    }
    /**
     * 
     * @param {String} route 
     * @param {Array} params 
     * @returns {String}
     * 
     */

  }, {
    key: "replaceParams",
    value: function replaceParams(route, params) {
      // Count parameters with regex e.g. {param} || {id}
      var pattern = /{(\w+)}/g;
      var matches = route.match(pattern);
      var paramsCount = matches == null ? 0 : matches.length; // If params length is different from passed params - throw

      if (params.length != paramsCount) {
        throw "Parameters length is different from passed parameters!";
      } // Replace all placeholder params with passed params


      var replacedUrl = this.format(route, params);
      return replacedUrl;
    }
    /**
     * 
     * @param {String} source 
     * @param {Array} params 
     * @returns {String}
     * 
     */

  }, {
    key: "format",
    value: function format(source, params) {
      // Replace every {0},{1} with passed params
      for (var i = 0; i <= params.length; i++) {
        source = source.replace(new RegExp("\\{" + i + "\\}", "g"), params[i]);
      }

      return source;
    }
  }]);

  return RequestEndpoints;
}();

exports["default"] = RequestEndpoints;