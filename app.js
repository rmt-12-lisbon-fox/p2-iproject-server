require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer)
const router = require('./routes/index')
const PORT = 3000
const users = []

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(router)
io.on('connection', (socket) => {

    socket.on('sendMessage', (data) => {

        io.emit('broadcastMessage', data)
    })
    socket.on('loginUser', (user) => {
        users.push(user)
        io.emit('sendUser', users)
    })
})
httpServer.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})
