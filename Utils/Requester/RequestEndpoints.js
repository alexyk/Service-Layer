import { apiHost, domainPrefix } from '../config';

export default class RequestEndpoints {
    constructor() {
        this.routes = {
            Register: `${apiHost}users/signup`,
            Login: `${apiHost}login`,
            GetCurrencies: `${apiHost}currencies`,
            RequestBooking: `${apiHost}reservations/request`,
            ChangeListingStatus: `${apiHost}admin/listings/state`,
            CreateListingProgress: `${apiHost}listings/progress`,
            GetTopListings: `${apiHost}listings/top`, // getListings
            CreateListing: `${apiHost}listings`,
            GetLocRate: `https://api.coinmarketcap.com/v1/ticker/lockchain/?convert=EUR`,
            GetAmenitiesByCategory: `${apiHost}categories`,
            GetPropertyTypes: `${apiHost}property_types`,
            GetCurrencyRates: `${apiHost}rates`,
            ResendConfirmationEmail: `${apiHost}airdrop/sendVerifyEmailLink`,
            GetUserAirdropInfo: `${apiHost}airdrop`,
            SendRecoveryEmail: `${apiHost}users/resetPassword/token`, //postRcoveryEmail
            SendNewPassword: `${apiHost}users/resetPassword/change`, // postNewPassword
            CancelBooking: `${apiHost}api/hotels/booking/cancel`,
            ConfirmBooking: `${apiHost}api/hotels/booking/confirm`,
            CreateReservation: `${apiHost}api/hotels/booking`, //testBook
            UpdateUserInfo: `${apiHost}users/me`,
            GetUserInfo: `${apiHost}users/me/info`,
            GetAllMyListings: `${apiHost}users/me/listings?size=1000000`,
            GetMyJsonFile: `${apiHost}users/me/jsonFile`, // getCurrentlyLoggedUserJsonFile
            GetCountOfMyUnreadMessages: `${apiHost}users/me/messages/count`, // getCountOfUnreadMessages
            ChangeMessageStatus: `${apiHost}users/me/conversations`,
            GetListing: `${apiHost}listings/{0}`,
            GetChatMessages: `${apiHost}users/me/conversations/{0}?page={1}`,
            GetMyConversations: `${apiHost}users/me/conversations`
        }
    }

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

    processQuery(query) {
        // Remove empty, undefined, null and e.g. items from array
        let filteredQuery = query.filter(function(e){return e}); ;

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

    format(source, params) {
        // Replace every {0},{1} with passed params
        for (let i = 0; i <= params.length; i++) {
            source = source.replace(new RegExp("\\{" + i + "\\}", "g"), params[i])
        }
        return source;
    }
}