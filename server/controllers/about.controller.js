const About = require('../models/about.model')

module.exports.create = async (req, res) => {
  const create = new About({
    name: req.body.name,
    text: req.body.text,
    contacts: req.body.contacts,
    imageUrl: `/${req.file.filename}`
  })

  try {
    await create.save()
    res.status(201).json(create)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAbout = async (req, res) => {
  try {
    const about = await About.find().sort({date: -1})
    res.json(about)
  } catch (e) {
    res.status(500).json(e)
  }
}
