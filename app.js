if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const { nasa_API, ipstack_API, satDev_API } = require('./api/axios')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/background', (req, res) => {
  nasa_API
    .get('/apod', {
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
  let latitude
  let longitude
  let country
  let city
  ipstack_API
    .get('', {
      params: {
        access_key: process.env.IPSTACK_KEY
      }
    })
    .then(({ data }) => {
      latitude = data.latitude
      longitude = data.longitude
      country = data.country_name
      city = data.city
      return satDev_API
        .get('/25544', {
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})