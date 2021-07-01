
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const controller = require('./controllers/controller')
const userController = require('./controllers/userController')
const cors = require('cors')
const bodyParser = require('body-parser')
const errorHandler = require('./middlewares/errorHandler')
const auth = require('./middlewares/auth')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())



app.post('/gauth', userController.googleAuth)
app.get('/api', controller.getAPI)
app.get('/recipe', controller.recipe)

app.use(auth)
app.get('/chart', controller.getChart)

app.get('/record', controller.recordDiet)
app.get('/diet', controller.getDietData)


app.listen(port, () => {
  console.log(`Your app listening at http://localhost:${port}`)
})

app.use(errorHandler)