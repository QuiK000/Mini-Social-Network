const User = require('../Models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { auth } = require('../Config/MiddleWareAuth')

const generateAccessToken = (id, email, username) => {
  const payload = { id, email, username }

  return jwt.sign(payload, auth, {
    expiresIn: '24h'
  })
}

class Controller {
  async createAccount(req, res) {
    try {
      const { email, username, password } = req.body
      const hashPassword = bcrypt.hashSync(password, 6)

      const user = new User({ email, username, password: hashPassword })
      const currentUser = await User.findOne({ username })
      const currentEmail = await User.findOne({ email })

      if (currentUser) {
        return res.json({
          message: 'Придумайте другой логин!',
          status: 400
        })
      }

      if (currentEmail) {
        return res.json({
          message: `Аккаунт зарегистрирован на данный Email!`,
          status: 400
        })
      }

      await user.save()
      return res.json({
        message: 'Аккаунт успешно создан!',
        status: 200
      })
    } catch (e) {
      console.log(e)
    }
  }
  async loginAccount(req, res) {
    try {
      const { email, username, password } = req.body
      const user = await User.findOne({ username })
      const candidate = await User.findOne({ email, username })

      if (!user) {
        return res.json({
          message: `Не найден ${username}`,
          status: 400
        })
      }

      if (!candidate.email) {
        return res.json({
          message: `Не найден данный Email!`,
          status: 400
        })
      }

      const validPassword = bcrypt.compareSync(password, user.password)

      if (!validPassword) {
        return res.json({
          message: 'Введен неверный пароль',
          status: 400
        })
      }

      const token = generateAccessToken(user._id, user.email, user.username)
      res.cookie('token', token)

      return res.json({ message: 'Успешно!', status: 200, token })
    } catch (e) {
      console.log(e)
    }
  }
  async getUsers(req, res) {
    try {
      const user = await User.find()
      res.json(user)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new Controller()