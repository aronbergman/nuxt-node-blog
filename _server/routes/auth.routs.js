const { Router } = require('express')
const passport = require('passport')
const router = Router()
const { login, createUser } = require('./../controllers/auth.controller')

router.post('/admin/login', login)
router.post(
  '/admin/create',
  passport.authenticate('jwt', { session: false }),
  createUser)

module.exports = router
