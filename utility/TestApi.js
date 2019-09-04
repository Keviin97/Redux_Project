console.log('hola mundo!');

const superagent = require('superagent');
const token = 'Token bf6ab47d00c071af3f209663fc6c20aec2241927'

superagent.get('http://localhost:9000/post/')
.set('Accept', 'application/json').set('Content-Type', 'application/json')
.set('Authorization', token)
.then(res => {
   console.log(res.text)
   console.log(res.body, res.headers, res.status)
 })
 .catch(err => {
    console.log(err.message, err.response)
 });

