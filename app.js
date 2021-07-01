if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const router = require('./routes/index.js')
var cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(cors())
app.use('/', router)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})