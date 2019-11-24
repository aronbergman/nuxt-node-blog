const Question = require('../models/question.model')

module.exports.create = async (req, res) => {

  const question = new Question({
    question: req.body.question,
    answer: req.body.answer,
    name: req.body.name
  })
  try {
    await question.save()
    res.status(201).json(question)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const question = await Question.find().sort({ date: -1 })
    res.json(question)
  } catch (e) {
    res.status(500).json(e)
  }
}
