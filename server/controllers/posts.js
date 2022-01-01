import mongoose from 'mongoose'
import Post from '../models/Post.js'

// Errors https://www.restapitutorial.com/httpstatuscodes.html

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
    res.status(200).json(posts)
  } catch (error) {
    res.status(404).json({ error })
  }
}

export const createPost = async (req, res) => {
  try {
    const post = await Post.create({ ...req.body })
    res.status(201).json(post)
  } catch (error) {
    res.status(409).json({ error })
  }
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.params
  const body = req.body
  const updatedPost = { ...body, _id }

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No post with that id')
  }

  try {
    const data = await Post.findByIdAndUpdate(_id, updatedPost, { new: true })
    res.status(201).json({ data })
  } catch (error) {
    res.status(409).json({ error })
  }
}

export const deletePost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No post with that id')
  }
  await Post.findByIdAndRemove(id)

  res.status(200).json({ message: 'Post deleted successfully' })
}
