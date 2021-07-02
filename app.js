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
app.post('/googleLogin', Controller.googleLogin)

app.use(checkLogin)

app.get('/programs', Controller.fetchPrograms)
app.get('/programs/:id', Controller.programDetail)

app.get('/mySchedule', Controller.fetchSchedule)
app.post('/mySchedule', Controller.createSchedule)
app.delete('/mySchedule/:id', Controller.deleteSchedule)

app.get('/reminders', Controller.fetchReminder)
app.post('/reminders', Controller.createReminder)
app.delete('/reminders/:id', Controller.deleteOneReminder)

app.listen(port, () => console.log(`server listen at port ${port}`))

