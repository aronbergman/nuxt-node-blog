const passport = require('passport')
const { Router } = require('express')
const upload = require('./../middleware/upload')
const ctr = require('../controllers/post.controller')
const router = Router()

// Admin
router.post(
    '/admin/',
    passport.authenticate('jwt', { session: false }),
    upload.single('image'),
    ctr.create
)

router.get(
    '/admin/',
    passport.authenticate('jwt', { session: false }),
    ctr.getAll
)

router.get(
    '/admin/:id',
    passport.authenticate('jwt', { session: false }),
    ctr.getById
)

router.put(
    '/admin/:id',
    passport.authenticate('jwt', { session: false }),
    ctr.update
)

router.delete(
    '/admin/:id',
    passport.authenticate('jwt', { session: false }),
    ctr.remove
)

// Base
router.get('/', ctr.getAll)
router.get('/:id', ctr.getById)
router.put('/:id', ctr.addView)


module.exports = require(router)