export default class RequestEndpoints {
  constructor(config) {
    const { apiHost } = config;
    this.routes = {
      // Neighter parameter nor query
      Register: `${apiHost}users/signup`,
      Login: `${apiHost}login`,
      GetCurrencies: `${apiHost}currencies`,
      RequestBooking: `${apiHost}reservations/request`,
      ChangeListingStatus: `${apiHost}admin/listings/state`,
      ChangeUserStatus: `${apiHost}admin/users/verify`,
      CreateListingProgress: `${apiHost}listings/progress`,
      GetTopListings: `${apiHost}listings/top`,
      CreateListing: `${apiHost}listings`,
      GetAmenitiesByCategory: `${apiHost}categories`,
      GetPropertyTypes: `${apiHost}property_types`,
      GetCurrencyRates: `${apiHost}rates`,
      ResendConfirmationEmail: `${apiHost}airdrop/sendVerifyEmailLink`,
      GetUserAirdropInfo: `${apiHost}airdrop`,
      SendRecoveryEmail: `${apiHost}users/resetPassword/token`,
      SendNewPassword: `${apiHost}users/resetPassword/change`,
      CancelBooking: `${apiHost}api/hotels/booking/cancel`,
      ConfirmBooking: `${apiHost}api/hotels/booking/confirm`,
      CreateReservation: `${apiHost}api/hotels/booking`,
      UpdateUserInfo: `${apiHost}users/me`,
      GetUserInfo: `${apiHost}users/me/info`,
      GetMyJsonFile: `${apiHost}users/me/jsonFile`,
      GetCountOfMyUnreadMessages: `${apiHost}users/me/messages/count`,
      ChangeMessageStatus: `${apiHost}users/me/conversations`,
      EditAirdropVoteUrl: `${apiHost}airdrop/editVoteUrl`,
      UpdateUserAdditionalInfo: `${apiHost}users/me/identity`,
      VerifyCreditCardPayment: `${apiHost}payment/creditcard`,
      GetTopHotels: `${apiHost}api/hotels/top`,
      SendVerificationEmail: `${apiHost}users/me/sendEmailVerification`,
      VerifyEmailSecurityCode: `${apiHost}users/me/checkingEmailVerificationSecurityCode`,

      // Parameter only
      GetListing: `${apiHost}listings/{0}`,
      GetChatMessages: `${apiHost}users/me/conversations/{0}?page={1}`,
      GetListingProgress: `${apiHost}listings/{0}/progress`,
      GetMyListingById: `${apiHost}me/listings/{0}`,
      VerifyUserEmail: `${apiHost}airdrop/verifyEmail{0}`,
      SaveAirdropSocialProfile: `${apiHost}me/social/{0}`,
      VerifyUserAirdropInfo: `${apiHost}airdrop/participate/{0}`,
      UpdateListingProgress: `${apiHost}listings/{0}/progress`,
      ЕditListing: `${apiHost}me/listings/{0}/edit`,
      DeleteInProgressListing: `${apiHost}listings/{0}/progress`,
      GetCancellationFees: `${apiHost}api/hotels/booking/{0}/cancellationFee`,
      CheckIfAirdropUserExists: `${apiHost}userExists/{0}`,
      CancelTrip: `${apiHost}trips/{0}/cancel`,
      AcceptReservation: `${apiHost}reservations/{0}/accept`,
      CancelReservation: `${apiHost}reservations/{0}/cancel`,
      PublishCalendarSlot: `${apiHost}listings/{0}/calendar`,
      SendMessage: `${apiHost}users/me/conversations/{0}`,
      EditDefaultDailyPrice: `${apiHost}listings/{0}/dailyPrice`,
      GetEmailFreeResponse: `${apiHost}users/email/{0}/`,
      DeleteListing: `${apiHost}me/listings/{0}/delete`,
      ContactHost: `${apiHost}listings/{0}/conversations`,
      GetRegionNameById: `${apiHost}regions/{0}/name`,
      GetMapInfo: `${apiHost}api/hotels/filtered/map{0}`,
      GetStaticHotelsByFilter: `${apiHost}api/hotels/filtered{0}{1}`,
      GetStaticHotels: `${apiHost}regions/{0}`,
      GetHotelBookingDetails: `${apiHost}users/me/bookings/{0}`,
      GetExternalCampaignBalance: `${apiHost}airdrop/campaigns/balance`,

      // Query only
      GetMyConversations: `${apiHost}users/me/conversations`,
      GetMyListingsInProgress: `${apiHost}users/me/listings/incomplete`,
      GetMyHotelBookings: `${apiHost}users/me/bookings`,
      GetRegionsBySearchParameter: `${apiHost}regions/search`,
      SendRecoveryToken: `${apiHost}users/resetPassword/confirm`,
      GetMyTrips: `${apiHost}users/me/trips`,
      GetMyReservations: `${apiHost}users/me/reservations`,
      GetAllUnpublishedListings: `${apiHost}admin/listings/unpublished`,
      GetAllPublishedListings: `${apiHost}admin/listings/published`,
      GetMyListings: `${apiHost}users/me/listings`,
      GetListingsByFilter: `${apiHost}api/filter_listings`,
      GetCountries: `${apiHost}countries`,
      GetCalendarByListingIdAndDateRange: `${apiHost}calendars/search/findAllByListingIdAndDateBetween`,
      GetAllUnverifiedUsers: `${apiHost}admin/users/unverified`,
      GetAllVerifiedUsers: `${apiHost}admin/users/verified`,

      // Both parameter and query
      GetHotelRooms: `${apiHost}api/hotels/{0}/rooms`,
      GetHotelById: `${apiHost}api/hotels/{0}`,
      GetCities: `${apiHost}countries/{0}/cities`,
      GetStates: `${apiHost}countries/{0}/states`
    }
  }

  /**
   * 
   * @param {String} routeName 
   * @param {Array} params 
   * @param {Array} query 
   * @returns {String}
   * 
   */
  GetRoute(routeName, params, query) {
    let rawRoute = this.routes[routeName];
    let url = rawRoute;

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
  processQuery(query) {
    // Remove empty, undefined, null and e.g. items from array
    let filteredQuery = [];

    if (query != undefined) {
      filteredQuery = query.filter(function (e) { return e });
    }

    // Create Key-value pairs
    let queryKvp = '';
    for (let i = 0; i < filteredQuery.length; i++) {
      if (i !== filteredQuery.length - 1) {
        queryKvp += `${filteredQuery[i]}&`;
      }
      else {
        queryKvp += filteredQuery[i];
      }
    }

    // Build final query
    const finalQuery = `?${queryKvp}`;
    return finalQuery;
  }

  /**
   * 
   * @param {String} route 
   * @param {Array} params 
   * @returns {String}
   * 
   */
  replaceParams(route, params) {
    // Count parameters with regex e.g. {param} || {id}
    const pattern = /{(\w+)}/g;
    const matches = route.match(pattern);
    const paramsCount = matches == null ? 0 : matches.length;

    // If params length is different from passed params - throw
    if (params.length != paramsCount) {
      throw "Parameters length is different from passed parameters!"
    }

    // Replace all placeholder params with passed params
    const replacedUrl = this.format(route, params);

    return replacedUrl
  }

  /**
   * 
   * @param {String} source 
   * @param {Array} params 
   * @returns {String}
   * 
   */
  format(source, params) {
    // Replace every {0},{1} with passed params
    for (let i = 0; i <= params.length; i++) {
      source = source.replace(new RegExp("\\{" + i + "\\}", "g"), params[i])
    }
    return source;
  }
}