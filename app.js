
const express = require('express')
const app = express()
const port = 3000
const controller = require('./controllers/controller')

const cors = require('cors')
 

const bodyParser = require('body-parser')
 

 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cors())

app.get('/api', controller.getAPI)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

