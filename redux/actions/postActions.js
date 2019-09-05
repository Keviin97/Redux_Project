import { api } from '../../utility/api';

const LIST_POSTS = 'LIST_POSTS';
const LIST_COMMENTS_POSTS = 'LIST_COMMENTS_POSTS';

export const setData = (type, data) => ({
  type: type,
  data
})

export function listPosts() {
  const path = '/post/'

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

export function newPublication(data) {
  const path = '/post/';
  return(dispatch) => {
    return api.post(path, data)
    .then((res) => {
      console.log(res)
      console.log('Publicacion realizada')
    })
    .catch((error) => {
      console.log(error)
      console.log('Error en la publicacion')
    })
  }
}
// export function listCommentsPost(id) {
//   const path = `http://localhost:9000/api/post/${id}/comment/`

//   return (dispatch) => {
//     return request.get(path).set('Accept', 'application/json').set('Content-Type', 'application/json').set('Authorization', token)
//       .then((res) => {
//         dispatch(setData(LIST_COMMENTS_POSTS,res.body))
//         console.log('Datos listados')
//       })
//       .catch((error) => {
//         console.log(error)
//         console.log('Error en la peticion')
//       })
//   }
// }