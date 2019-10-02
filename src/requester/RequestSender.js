import RequestParams from './RequestParams';

export default class RequestSender {
  constructor(storage, config, headers = {}) {
    this._storage = storage;
    this.config = config;
    this.RequestParams = new RequestParams(storage, config, headers);
  }

  /**
   * 
   * @param {String} endpoint 
   * @param {Enumerator} method 
   * @param {Object} postObj 
   * @param {String} captchaToken
   * @returns {Object}
   * 
   */
  async sendRequest(endpoint, method, postObj = null, captchaToken = null, headers = null) {
    const methodRef = this.RequestParams[method].bind(this.RequestParams);
    let requestHeaders = await methodRef(postObj, captchaToken);

    if (headers != null) {
      // delete requestHeaders.headers; // 2018-12-20 commented by Alex K - added headers from login as parameter. This particular line is not known what it does.
      requestHeaders.headers = Object.assign(requestHeaders.headers, headers);
    }
    headers = requestHeaders;

    return fetch(endpoint, headers)
      .then((response) => {
        if (!response.ok) {
          return {
            body: {},
            success: response.ok,
            errors: response.json().then((r) => {
              this.checkExpiredJwtAndLogOff(r);
              return r;
            })
          };
        }
        return {
          body: response.json(),
          success: response.ok,
          errors: {}
        };
      });
  }

  checkExpiredJwtAndLogOff(r) {
    if (r.errors && r.errors.ExpiredJwt) {
      this._storage.removeItem(`${this.config.domainPrefix}.auth.locktrip`);
      this._storage.removeItem(`${this.config.domainPrefix}.auth.username`);
    }
  }
}