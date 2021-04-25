const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const router = require('./router')

const SERVER_PORT = process.env.SERVER_PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

mongoose.set('useCreateIndex', true)

mongoose.connect('mongodb+srv://quikkkk:12as34zxc@cluster0.gp2jz.mongodb.net/data?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(response => console.log('connected')).catch(e => console.log(e))

app.listen(SERVER_PORT, () => console.log(`server started on ${SERVER_PORT}`))