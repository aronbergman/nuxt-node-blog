const { Schema, model } = require('mongoose')

const contactSchema = new Schema({
  name: {
    type: String
  },
  subject: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  message: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
})

module.exports = model('contact', contactSchema)
