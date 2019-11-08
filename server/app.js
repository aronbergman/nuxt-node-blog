const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const passposrStrategy = require('./middleware/passport-strategy')
const authRouts = require('./routes/auth.routs')
const postRouts = require('./routes/post.routs')
const commentRouts = require('./routes/comment.routs')
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI)
    .then(() => {
        consola.ready({
            message: 'MD connected',
            badge: true
        })
    })
    .catch(error => console.log('MD error', error))

app.use(passport.initialize())
passport.use(passposrStrategy)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/auth', authRouts)
app.use('/api/post', postRouts)
app.use('/api/comment', commentRouts)

module.exports = app
