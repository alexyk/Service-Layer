import { domainPrefix } from '../config';

export default class RequestParams {
    constructor(storage, headers = {}) {
        this._storage = storage;


        this._headers = Object.assign(headers, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Device-Version': '49365f68-42e1-11e8-842f-0ed5f89f718b'
        });
    }

    async getHeaders() {
        const auth = await this._storage.getItem(`${domainPrefix}.auth.lockchain`);

        const headers = {
            'Authorization': this.auth,
        }
        return Object.assign(this._headers, headers)
    }

    async GET() {
        return {
            headers: await this.getHeaders(),
            method: 'GET'
        }
    }

    async POST(object) {
        return {
            headers: await this.getHeaders(),
            method: 'POST',
            body: JSON.stringify(object)
        }
    }

    async DELETE() {
        return {
            headers: await this.getHeaders(),
            method: 'DELETE'
        }
    }
}