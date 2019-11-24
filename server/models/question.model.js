const { Schema, model } = require('mongoose')

const questionSchema = new Schema({
  question: {
    type: String
  },
  answer: {
    type: String
  },
  name: {
    type: String,
    default: 'Анонимный вопрос'
  },
  date: {
    type: Date,
    default: Date.now
  },
})

module.exports = model('question', questionSchema)
