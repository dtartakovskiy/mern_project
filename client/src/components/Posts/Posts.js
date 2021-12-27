import React from 'react'

import Post from './Post/Post'
import useStyles from './styles'

const Posts = () => {
  const { mainContainer, smMargin, actionDiv } = useStyles()
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  )
}

export default Posts
