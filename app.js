const express = require('express');
const app = express()
const router = require('./router');
const cors = require('cors');
const port = process.env.PORT || 3000 


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(router)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})