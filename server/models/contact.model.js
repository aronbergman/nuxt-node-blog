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
})

module.exports = model('contact', contactSchema)
