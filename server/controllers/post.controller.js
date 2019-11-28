const Post = require('../models/post.model')
const User = require('../models/user.model')
const Typograf = require('typograf')

module.exports.create = async (req, res) => {
  const tp = new Typograf({ locale: ['ru', 'en-US'] })
  const post = new Post({
    title: req.body.title,
    text: tp.execute(req.body.text),
    category: req.body.category,
    description: req.body.description,
    imageUrl: `/${req.file.filename}`
  })

  try {
    await post.save()
    res.status(201).json(post)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 })
    res.json(posts)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAllUsers = async (req, res) => {
  try {
    const posts = await User.find().sort({ ligin: -1 })
    res.json(posts)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    await Post.findById(req.params.id).populate('comments').exec((error, post) => {
      res.json(post)
    })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  const $set = {
    text: req.body.text,
    title: req.body.title,
    category: req.body.category,
    description: req.body.description
  }
  try {
    const post = await Post.findOneAndUpdate({
      _id: req.params.id
    }, { $set }, { new: true })
    res.json(post)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id })
    res.json({ message: 'Пост удален' })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.addView = async (req, res) => {
  const $set = {
    views: ++req.body.views
  }
  try {
    await Post.findOneAndUpdate({ _id: req.params.id }, { $set })
    res.status(204).json()
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAnalytics = async (req, res) => {
  try {
    const posts = await Post.find()

    const labels = posts.map(post => post.title)

    const json = {
      comments: {
        labels,
        data: posts.map(post => post.comments.length)
      },
      views: {
        labels,
        data: posts.map(post => post.views)
      }
    }

    res.json(json)
  } catch (e) {
    res.status(500).json(e)
  }
}
