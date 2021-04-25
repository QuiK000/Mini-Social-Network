const Router = require('express')
const router = new Router()

const controller = require('./Controllers/Controller')

router.post('/login', controller.loginAccount)
router.post('/registration', controller.createAccount)
router.get('/users', controller.getUsers)

module.exports = router