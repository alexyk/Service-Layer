import { domainPrefix } from '../config';

export default class RequestParams {
    constructor(storage, headers = {}) {
        this._storage = storage;


        this._headers = Object.assign(headers, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
    }

    /**
     * @returns {Object}
     */
    async getAuthHeader() {
        return {
            'Authorization': await this._storage.getItem(`${domainPrefix}.auth.locktrip`)
        }
    }

    /**
     * @returns {Object}
     */
    async getAllHeaders() {
        return Object.assign(this._headers, await this.getAuthHeader())
    }

    /**
     * @returns {Object}
     */
    async GET() {
        return {
            headers: await this.getAllHeaders(),
            method: 'GET'
        }
    }

    /**
     * 
     * @param {Object} object
     * @returns {Object}
     */
    async POST(object) {
        return {
            headers: await this.getAllHeaders(),
            method: 'POST',
            body: JSON.stringify(object)
        }
    }

    /**
     * @returns {Object}
     */
    async DELETE() {
        return {
            headers: await this.getAllHeaders(),
            method: 'DELETE'
        }
    }
}