import { apiHost, domainPrefix } from '../config';

export default {
    Register: `${apiHost}users/signup`,
    Login: `${apiHost}login`,
    GetCurrencies: `${apiHost}currencies`,
    GetListings: `${apiHost}listings/top`
}