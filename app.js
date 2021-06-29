require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')
const cors = require('cors')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/', router)

app.listen(port, (req, res) => {
    console.log(`Server Already to http://localhost:${port}`)
})

// process.on('SIGTERM')