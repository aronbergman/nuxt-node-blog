const { Schema, model } = require('mongoose')

const aboutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  goal: {
    type: String,
    required: true
  },
  titleFirst: {
    type: String,
    required: true
  },
  contentFirst: {
    type: String,
    required: true
  },
  titleSecond: {
    type: String,
    required: true
  },
  contentSecond: {
    type: String,
    required: true
  },
  titleThird: {
    type: String,
    required: true
  },
  contentThird: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
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
