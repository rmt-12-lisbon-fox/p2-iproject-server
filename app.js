
const express = require('express')
const app = express()
const port = 3000
const controller = require('./controllers/controller')
const userController = require('./controllers/userController')
const cors = require('cors')
const bodyParser = require('body-parser')
const errorHandler = require('./middlewares/errorHandler')
const { decodeJWt  } = require('./helpers/jwt')
const { User  } = require('./models')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())



// app.post('/login', controller.login)
// app.post('/register', controller.register)
app.post('/gauth', userController.googleAuth)
app.get('/api', controller.getAPI)

// add middleware
app.use(function(req, res, next) {
  if (req.headers.access_token) {
    // ada token
    try {
      let payload = decodeJWt(req)
      console.log(payload)
      User.findByPk(+payload.id)
      .then(user => {
        if (user) {
          req.user = user
          console.log(`aman cuy`)
          next()
        } else {
          console.log(`user itu udah gaada`)
          next({ code: 401, message: "authentication failed"})
        }
      })
      .catch(next)
    } catch (error) {
      next({ code: 401, message: "gagal try catch"})
    }
  } else {
    next({ code: 401, message: "you must login first"})
  }
})

app.get('/diet', controller.recordDiet)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(errorHandler)