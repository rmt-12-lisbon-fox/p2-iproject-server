if(process.env.NODE_ENV === 'development'){
  require('dotenv').config()
}

const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const PORT = process.env.PORT || 3000
const cors = require('cors')
const router = require('./router')
const socketio = require('socket.io')
const io = socketio(server,{
  cors:{
    origin:'*'
  }
})

app.use(cors())
app.use(express.urlencoded({
  extended: false
}))
app.use(express.json())

app.use('/', router)
io.on('connection',socket=>{
  console.log('connect io.on');
  socket.on('disconnect',()=>{
      io.emit('message','<i>A user has left the chat</i>')
  })
  socket.on('getChat',(msg)=>{
    console.log(msg);
    socket.broadcast.emit('sendChat', msg)
  })
})


server.listen(PORT, _ => {
  console.log(`this app run at port ${PORT}`);
})