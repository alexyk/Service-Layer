export default class RequestParams {
  constructor(storage, config, headers = {}) {
    this._storage = storage;
    this.config = config;

    this._headers = Object.assign(headers, {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
  }

  /**
   * 
   * @returns {Object}
   * 
   */
  async getAllHeaders() {
    return Object.assign(this._headers, await this.getAuthHeader());
  }

  /**
   * 
   * @returns {Object}
   * 
   */
  async getAuthHeader() {
    const authorization = await this._storage.getItem(`${this.config.domainPrefix}.auth.locktrip`);
    return authorization ? { 'Authorization': authorization } : {};
  }

  /**
   * 
   * @param {String} captcha 
   * @returns {Object}
   * 
   */
  async getCaptchaHeader(captcha) {
    return captcha ? { 'Captcha': captcha } : {};
  }

  /**
   * 
   * @returns {Object}
   * 
   */
  async GET() {
    return {
      headers: await this.getAllHeaders(),
      method: 'GET'
    }
  }

  /**
   * 
   * @returns {Object}
   * 
   */
  async DELETE() {
    return {
      headers: await this.getAllHeaders(),
      method: 'DELETE'
    }
  }

  /**
   * 
   * @param {Object} object
   * @returns {Object}
   * 
   */
  async POST(object, captchaToken) {
    return {
      headers: Object.assign(await this.getAllHeaders(), captchaToken ? await this.getCaptchaHeader(captchaToken) : {}),
      method: 'POST',
      body: JSON.stringify(object)
    }
  }
}