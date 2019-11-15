const passport = require('passport')
const {Router} = require('express')
const upload = require('../middleware/upload')
const ctr = require('../controllers/about.controller')
const router = Router()

// /api/about/admin
router.post(
  '/admin/',
  passport.authenticate('jwt', {session: false}),
  upload.single('image'),
  ctr.create
)

router.get('/fetch/', ctr.getAbout)

module.exports = router
