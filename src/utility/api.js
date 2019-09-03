const request = require('superagent');
const BASE_URL = 'http://localhost:9000';
const token = 'Token bf6ab47d00c071af3f209663fc6c20aec2241927';

function apiGet() {
    const url = BASE_URL + '/post';
    return request.get(url)
    .set('Accept', 'application/json').set('Content-Type', 'application/json').set('Authorization', token);
}


export const api = {apiGet};