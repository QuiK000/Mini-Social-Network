const jwt = require('jsonwebtoken')
const { auth } = require('../Config/MiddleWareAuth')

module.exports = function (req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token === null) {
    return res.json({
      message: 'Майнкрафт',
      status: 403
    })
  }

  jwt.verify(token, auth, (err, user) => {
    console.log(err)

    if (err) {
      return res.json({
        message: 'Майнкрафт',
        status: 403
      })
    }

    req.user = user
    next()
  })
}