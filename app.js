if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const { nasa_API, nominatim_API, satDev_API } = require('./api/axios')
const nodemailer = require('nodemailer')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/background', (req, res) => {
  nasa_API
    .get('/planetary/apod', {
      params: {
        api_key: process.env.NASA_KEY
      }
    })
    .then(({ data }) => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

app.get('/predictions', (req, res) => {
  const latitude = req.query.latitude
  const longitude = req.query.longitude
  let country
  let city
  nominatim_API
    .get('/reverse', {
      params: {
        lat: latitude,
        lon: longitude,
        format: 'json'
      }
    })
    .then(({ data }) => {
      country = data.address.country
      if (data.address.city_district) {
        city = data.address.city_district
      } else if (data.address.city) {
        city = data.address.city
      } else if (data.address.village) {
        city = data.address.village
      } else {
        city = data.address.state
      }
      console.log(country, city);
      return satDev_API
        .get('/passes/25544', {
          params: {
            lat: latitude,
            lon: longitude
          }
        })
    })
    .then(({ data }) => {
      res.status(200).json({country, city, latitude, longitude, data})
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

app.post('/email', (req, res) => {
  const email = req.body.email
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })

  let mailOptions = {
    from: '',
    to: email,
    subject: 'Your findISS prediction results',
    text: 'testing testing 222222'
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.status(500).json({message: err})
    } else {
      res.status(200).json({message: 'Email successfully sent!'})
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})