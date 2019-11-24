const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const passportStrategy = require('./middleware/passport-strategy')
const authRoutes = require('./routes/auth.routes')
const postRoutes = require('./routes/post.routes')
const commentRoutes = require('./routes/comment.routes')
const aboutRoutes = require('./routes/about.routes')
const contactRoutes = require('./routes/contact.routes')
const questionRoutes = require('./routes/question.routes')
const keys = require('./keys')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(keys.MONGO_URI, {
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => consola.info({
    message: `Connected ${process.env.MONGO_URI}`,
    badge: true
  }))
  .catch(error => console.error(error))

app.use(passport.initialize())
passport.use(passportStrategy)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/about', aboutRoutes)
app.use('/api/post', postRoutes)
app.use('/api/comment', commentRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/question', questionRoutes)

module.exports = app
