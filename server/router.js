const Router = require('express')
const router = new Router()

const controller = require('./Controllers/Controller')

router.post('/login')
router.post('/registration', controller.createAccount)
router.get('/users')

module.exports = router