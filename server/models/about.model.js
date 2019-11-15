const { Schema, model } = require('mongoose')

const aboutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  contacts: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    default: 0
  },
  imageUrl: String
})

module.exports = model('about', aboutSchema)
