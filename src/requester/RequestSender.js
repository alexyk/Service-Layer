import RequestEndpoints from './RequestEndpoints';
import RequestMethods from './RequestMethods';
import RequestParams from './RequestParams';
import Axios from 'axios';

export default class RequestSender {
  constructor(storage, config, headers = {}) {
    this._storage = storage;
    this.config = config;
    this.RequestParams = new RequestParams(storage, config, headers);
    this.onServerResponse = this.onServerResponse.bind();
    this.onServerError = this.onServerError.bind();
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
  async sendRequest(endpoint, method, postObj = null, captchaToken = null, config = null) {
    const methodRef = this.RequestParams[method].bind(this.RequestParams);
    let requestConfig = await methodRef(postObj, captchaToken);

    if (config != null) {
      // delete requestConfig.headers; // 2018-12-20 commented by Alex K - added headers from login as parameter. This particular line is not known what it does.
      requestConfig.headers = Object.assign(requestConfig.headers, config);
    }
    config = requestConfig;

    if (method == 'GET') {
      return (
        Axios
          .get(endpoint, config)
          .then(this.onServerResponse)
          .catch(this.onServerError)
      )
    } else {
      return (
        Axios
          .post(endpoint, postObj, config)
          .then(this.onServerResponse)
          .catch(this.onServerError)
      )
    }
  }


  onServerResponse(response) {
    const { data, status } = response;
    let success = (status == 200);

    let
      body = {},
      errors = {};

    if (success) {
      body = new Promise((resolve,reject) => {
        resolve(data)
      });
    } else {
      errors = new Promise((resolve,reject) => {
        this.checkExpiredJwtAndLogOff(data);
        resolve(data);
      })
    }

    return { body, success, errors };
  }


  onServerError(error) {
    console.warn(`[requester] server error - ${error.message}`, {error});
  }

  checkExpiredJwtAndLogOff(r) {
    if (r.errors && r.errors.ExpiredJwt) {
      this._storage.removeItem(`${this.config.domainPrefix}.auth.locktrip`);
      this._storage.removeItem(`${this.config.domainPrefix}.auth.username`);
    }
  }
}
