const request = require('superagent');
const token = 'Token bf6ab47d00c071af3f209663fc6c20aec2241927';
// const path = 'http://localhost:9000/post/'

function get(path) {
  return request.get(path).
    set('Accept', 'application/json').set('Content-Type', 'application/json').set('Authorization', token);
}

export const api = { get };