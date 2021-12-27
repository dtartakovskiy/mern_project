import * as actions from '../actions/posts'

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case actions.FETCH_ALL:
      return [...posts, action.payload]
    case actions.CREATE_POST:
      return posts
    default:
      return posts
  }
}

export default postsReducer
