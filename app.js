// if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  require('dotenv').config()
// }
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routers')
const cors = require('cors')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})  

// module.exports = app
