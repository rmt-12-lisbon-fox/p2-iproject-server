const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const Controller = require('./controller')
const checkLogin = require('./checkLogin')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())

app.get('/videos', Controller.fetchVideo)
app.post('/videos', Controller.postToDatabase)

app.post('/register', Controller.register)
app.post('/login', Controller.login)

app.use(checkLogin)

app.get('/programs', Controller.fetchPrograms)
app.get('/programs/:id', Controller.programDetail)

app.get('/mySchedule', Controller.fetchSchedule)
app.post('/mySchedule', Controller.createSchedule)

app.listen(port, () => console.log(`server listen at port ${port}`))