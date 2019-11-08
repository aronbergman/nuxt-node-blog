const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const authRouts = require('./routes/auth.routs')
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

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/auth', authRouts)

module.exports = app
