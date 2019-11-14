const passport = require('passport')
const { Router } = require('express')
const ctr = require('../controllers/comment.controller')
const router = Router()

// /api/comment
router.post('/', ctr.create)

router.get(
  '/admin/comments',
  passport.authenticate('jwt', { session: false }),
  ctr.getAllComments
)

router.delete(
  '/admin/comments/:id',
  passport.authenticate('jwt', { session: false }),
  ctr.removeComment
)

module.exports = router
