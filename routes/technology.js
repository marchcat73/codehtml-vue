const express = require('express')
const controller = require('../controllers/technology')
const passport = require('passport')
const router = express.Router()

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove)
router.post('/', passport.authenticate('jwt', {session: false}), controller.create)
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update)

module.exports = router
