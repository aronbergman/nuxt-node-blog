const About = require('../models/about.model')

module.exports.create = async (req, res) => {
  const create = new About({
    name: req.body.name,
    specialty: req.body.specialty,
    dob: req.body.dob,
    goal: req.body.goal,
    titleFirst: req.body.titleFirst,
    titleSecond: req.body.titleSecond,
    titleThird: req.body.titleThird,
    contentFirst: req.body.contentFirst,
    contentSecond: req.body.contentSecond,
    contentThird: req.body.contentThird,
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
