require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')
const cors = require('cors')
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/', router)

io.on("connection", socket => {

    socket.on('sendMessage', (data) => {
        console.log(data);

        io.emit("broadcastMessage", data)
    })
});

httpServer.listen(port, (req, res) => {
    console.log(`Server Already to http://localhost:${port}`)
})

// process.on('SIGTERM')