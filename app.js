if(process.env.NODE_ENV === "development") {
  require('dotenv').config();
}

const express = require('express');
const port = process.env.PORT || 3000 
const app = express()
const httpServer = require('http').createServer(app);
const router = require('./router');
const cors = require('cors');
const io = require('socket.io')(httpServer);
const axios = require('./helpers/translateApi')

io.on('connection',(socket) => {
  // console.log('>>>>>>>>>>>');
  // socket.on('send', (data) => {
  // //   // const id = data.CommunityId;
    
  //   // console.log(id, 'ini id community');
  //   socket.join(data)
  //   // console.log(socket.rooms);
  //   // socket.emit('broadcast', "JOINED")
  //   // io.emit('broadcast', data)
  // })

  socket.on('translate', (message) => {
    console.log(message)
    let msg = [{Text: message.message}]
    
    axios({
      url: '/translate',
      method: 'post',
      data: msg
    })
    .then(({data}) => {
      message.message = data[0].translations[0].text
      io.emit('translateMsg', message)
    })
    .catch(err => {
      console.log(err);
    })
    
  })

  socket.on('message', (message) => {
    io.emit('getMessage', message)
  })


  
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(router)


httpServer.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})