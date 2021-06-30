if (process.env.NODE_ENV==="development") {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const router = require('./routes')
const errorsHandler = require('./middleware/errors')
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use('/', router)

app.use(errorsHandler)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
