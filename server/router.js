const Router = require('express')
const router = new Router()
const controller = require('./Controllers/Controller')
const { check } = require('express-validator')
const MiddleWareAuth = require('./Middleware/MiddleWareAuth')

// TODO: Сделать валидацию

router.post('/login', controller.loginAccount)
router.post('/registration', controller.createAccount)
router.get('/users', MiddleWareAuth, async (req, res) => {
  try {
    const user = req.user
    res.json(user)
  } catch (e) {
    console.log(e)
  }
})

module.exports = router