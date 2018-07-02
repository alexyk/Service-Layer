import { domainPrefix } from '../config';

export default class RequestParams {
    constructor(storage, headers = {}) {
        this._storage = storage;


        this._headers = Object.assign(headers, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
    }

    async getAuthHeader() {
        return {
            'Authorization': await this._storage.getItem(`${domainPrefix}.auth.locktrip`)
        }
    }

    async getAllHeaders() {
        return Object.assign(this._headers, await this.getAuthHeader())
    }

    async GET() {
        return {
            headers: await this.getAllHeaders(),
            method: 'GET'
        }
    }

    async POST(object) {
        return {
            headers: await this.getAllHeaders(),
            method: 'POST',
            body: JSON.stringify(object)
        }
    }

    async DELETE() {
        return {
            headers: await this.getAllHeaders(),
            method: 'DELETE'
        }
    }
}