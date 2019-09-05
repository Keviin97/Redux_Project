const initialState = {
  posts: []
}

function PostReducers(state = initialState, action) {
  switch (action.type) {
    case 'LIST_POSTS':
      return {
        ...state,
        posts: action.data
      }
    case 'LIST_COMMENTS_POSTS':
      return {
        ...state,
        posts: action.data
      }
    default:
      return state
  }
}

export default PostReducers;