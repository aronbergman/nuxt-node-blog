const passport = require('passport')
const { Router } = require('express')
const upload = require('../middleware/upload')
const ctr = require('../controllers/question.controller')
const router = Router()

// /api/question/
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  upload.single('image'),
  ctr.create
)

router.get(
  '/admin/',
  passport.authenticate('jwt', { session: false }),
  ctr.getAll
)

// /api/post
router.get('/', ctr.getAll)

module.exports = router
