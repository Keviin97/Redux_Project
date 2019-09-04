import { api } from '../../utility/api';

const request = require('superagent');
const token = 'Token bf6ab47d00c071af3f209663fc6c20aec2241927';

const LIST_POSTS = 'LIST_POSTS';
const LIST_COMMENTS_POSTS = 'LIST_COMMENTS_POSTS';

export const setData = (type,data) => ({
  type: type,
  data
})

export function listPosts() {
  const path = 'http://localhost:9000/api/post/'

  return(dispatch) => {
    return api.get(path)
    .then((res) => {
      dispatch(setData(LIST_POSTS,res.body))
      console.log('Datos listados')
    })
    .catch((error) => {
      console.log(error)
      console.log('Error en la peticion')
    })
  }
}

export function listCommentsPost(id) {
  const path = `http://localhost:9000/api/post/${id}/comment/`

  return (dispatch) => {
    return request.get(path).set('Accept', 'application/json').set('Content-Type', 'application/json').set('Authorization', token)
      .then((res) => {
        dispatch(setData(LIST_COMMENTS_POSTS,res.body))
        console.log('Datos listados')
      })
      .catch((error) => {
        console.log(error)
        console.log('Error en la peticion')
      })
  }
}