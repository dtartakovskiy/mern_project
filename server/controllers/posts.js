import Post from '../models/Post.js'

// Errors https://www.restapitutorial.com/httpstatuscodes.html

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
    res.status(200).json({ posts })
  } catch (error) {
    res.status(404).json({ msg: error.message })
  }
}

export const createPost = async (req, res) => {
  try {
    const post = await Post.create({ ...req.body })
    res.status(201).json(post)
  } catch (error) {
    res.status(409).json({ msg: error.message })
  }
}
