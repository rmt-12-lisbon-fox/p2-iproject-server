require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routes')
const cors = require('cors')
const port = 3000

app.use(cors());

//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router)


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})