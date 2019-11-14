const Comment = require('../models/comment.model')
const Post = require('../models/post.model')

module.exports.create = async (req, res) => {
  try {
    const { name, text, postId } = req.body
    const comment = new Comment({ name, text, postId })

    await comment.save()

    const post = await Post.findById(postId)
    const $set = {
      commentsCount: ++post.commentsCount
    }
    await Post.findOneAndUpdate({ _id: req.params.id }, { $set })
    post.comments.push(comment._id)
    await post.save()

    res.status(201).json(comment)

  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find().sort({ ligin: -1 })
    res.json(comments)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.removeComment = async (req, res) => {

  const post = await Post.findById(postId)
  const $set = {
    commentsCount: ++post.commentsCount
  }
  co

  try {
    await Comment.deleteOne({ _id: req.params.id })
    await Post.findOneAndUpdate({ _id: req.params.id }, { $set })
    res.json({ message: 'Комментарий удален' })
  } catch (e) {
    res.status(500).json(e)
  }
}
