const { Router } = require('express')
const router = Router()
const { login, createUser } = require('./../controllers/auth.controller')

router.post('/admin/login', login)
router.post('/admin/cleate', createUser)

module.exports = router