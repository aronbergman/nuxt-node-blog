const FormContact = require('../models/contact.model')

module.exports.create = async (req, res) => {

  const formContact = new FormContact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    subject: req.body.subject,
    message: req.body.message,
  })
  try {
    await formContact.save()
    res.status(201).json(formContact)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const question = await FormContact.find().sort({ date: -1 })
    res.json(question)
  } catch (e) {
    res.status(500).json(e)
  }
}
