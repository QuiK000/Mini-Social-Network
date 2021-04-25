const User = require('../Models/Users')
const bcrypt = require('bcrypt')

class Controller {
  async createAccount(req, res) {
    try {
      const { username, password } = req.body
      const hashPassword = bcrypt.hashSync(password, 6)

      const user = new User({ username, password: hashPassword })
      const currentUser = await User.findOne({ username })

      if (currentUser) {
        return res.json({
          message: 'Придумайте другой логин!'
        })
      }

      await user.save()
      return res.json({
        message: 'Аккаунт успешно создан!'
      })
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new Controller()