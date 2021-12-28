import * as api from '../../api'

export const FETCH_ALL = 'FETCH_ALL'
export const CREATE_POST = 'CREATE_POST'

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()
    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)
    dispatch({ type: CREATE_POST, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}
