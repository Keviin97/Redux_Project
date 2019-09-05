const request = require('superagent');
const token = 'Token bf6ab47d00c071af3f209663fc6c20aec2241927';
const prinPath = 'http://localhost:9000/api'

function get(path) {
  return request.get(prinPath + path).
    set('Accept', 'application/json').set('Content-Type', 'application/json').set('Authorization', token);
}

function post(path, body) {
  return request.post(prinPath + path).set('Accept', 'application/json').set('Content-Type', 'application/json').set('Authorization', token)
  .send(body);
}

export const api = { get, post };