const passport = require('passport')
const { Router } = require('express')
const upload = require('../middleware/upload')
const ctr = require('../controllers/contact.controller')
const router = Router()

// /api/contact/
router.post(
  '/',
  upload.single('image'),
  ctr.create
)

router.get(
  '/admin/',
  passport.authenticate('jwt', { session: false }),
  ctr.getAll
)

module.exports = router
