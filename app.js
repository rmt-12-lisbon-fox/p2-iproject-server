if (process.env.NODE_ENV !== "production")	require("dotenv").config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const Controller = require('./controller')
const checkLogin = require('./checkLogin')
const authorize = require('./authorize')

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

app.get('/reminders', Controller.fetchReminder)
app.post('/reminders', Controller.createReminder)

app.delete('/mySchedule', Controller.deleteSchedule)

app.listen(port, () => console.log(`server listen at port ${port}`))

// postgres://jolybhhjimakjs:3919618a118754aa3fbdead2674010c16d978fbe3b251ecb40762259f1103c66@ec2-35-169-188-58.compute-1.amazonaws.com:5432/dcrubjd1ftvqhe
