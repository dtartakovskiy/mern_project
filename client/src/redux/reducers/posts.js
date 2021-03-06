import {
  FETCH_ALL,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
} from '../actionTypes/posts'

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return posts.filter((post) => post._id !== action.payload)
    case FETCH_ALL:
      return action.payload
    case CREATE_POST:
      return [...posts, action.payload]
    case UPDATE_POST:
    case LIKE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )
    default:
      return posts
  }
}

export default postsReducer
