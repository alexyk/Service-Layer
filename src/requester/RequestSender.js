import RequestParams from "./RequestParams";

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
  async sendRequest(
    endpoint,
    method,
    postObj = null,
    captchaToken = null,
    headers = null
  ) {
    const methodRef = this.RequestParams[method].bind(this.RequestParams);
    let requestHeaders = await methodRef(postObj, captchaToken);
    const _this = this;

    if (headers != null) {
      // delete requestHeaders.headers; // 2018-12-20 commented by Alex K - added headers from login as parameter. This particular line is not known what it does.
      requestHeaders.headers = Object.assign(requestHeaders.headers, headers);
    }
    headers = requestHeaders;

    return new Promise(function(resolve, reject) {
      let id;
      if (_this.config.connectionTimeout != null) {
        id = setTimeout(() => {
            id = null;
            reject(new Error("timeout"));
          }, 
          _this.config.connectionTimeout
        );
      }

      fetch(endpoint, headers)
        .then(response => {
          if (id != null) {
            clearTimeout(id);
            id = null;
          }

          // prettier-ignore
          if (!response.ok) {
            resolve({
              body: {},
              success: response.ok,
              errors: response
                .text()
                .then(responseAsRawText => {
                  let jsonData;

                  // strip of HTML tags and CSS
                  const regex = /(<([^>]+)>|\{[^\}]+\})/gim;
                  let responseAsPlainText = responseAsRawText.replace(regex, "");
                  // strip of new lines
                  responseAsPlainText = responseAsPlainText.replace(/\r?\n|\r/gm, "");
                  // strip of tabs
                  responseAsPlainText = responseAsPlainText.replace(/\t/g, " ");
                  // strip of more than 2 spaces
                  responseAsPlainText = responseAsPlainText.replace(/ {2,}/g, " ");

                  // try parsing JSON
                  try {
                    jsonData = JSON.parse(responseAsRawText);
                  } catch (jsonError) {
                    jsonData = {
                      jsonError,
                      endpoint,
                      response,
                      responseAsRawText,
                      responseAsPlainText
                    };
                  }
                  _this.checkExpiredJwtAndLogOff(jsonData);

                  return jsonData;
                })
                .catch(error => error)
            });
          }

          resolve({
            body: response.json(),
            success: response.ok,
            errors: {}
          });
        })
        .catch(error => {
          if (id != null) {
            clearTimeout(id);
            id = null;
          }
          reject(error);
        });
    });
  }

  checkExpiredJwtAndLogOff(r) {
    if ((r.errors && r.errors.ExpiredJwt) || r.jsonError) {
      // TODO: Remove Async Storage usage
      this._storage.removeItem(`${this.config.domainPrefix}.auth.locktrip`);
      this._storage.removeItem(`${this.config.domainPrefix}.auth.username`);
    }
  }
}
