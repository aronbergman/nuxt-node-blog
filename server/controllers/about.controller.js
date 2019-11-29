const About = require('../models/about.model')
const Typograf = require('typograf')
const tp = new Typograf({ locale: ['ru', 'en-US'] })

module.exports.create = async (req, res) => {
  const create = new About({
    name: req.body.name,
    specialty: req.body.specialty,
    dob: req.body.dob,
    goal: req.body.goal,
    titleFirst: tp.execute(req.body.titleFirst),
    titleSecond: tp.execute(req.body.titleSecond),
    titleThird: tp.execute(req.body.titleThird),
    contentFirst: tp.execute(req.body.contentFirst),
    contentSecond: tp.execute(req.body.contentSecond),
    contentThird: tp.execute(req.body.contentThird),
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address
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
    const about = await About.find().sort({ date: -1 })
    res.json(about)
  } catch (e) {
    res.status(500).json(e)
  }
}
