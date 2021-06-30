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
      if (data.url.includes('youtube') || !data.url) {
        data = {
          url: 'https://apod.nasa.gov/apod/image/2106/OrionNebula_HubbleSerrano_2362.jpg',
          explanation: "Few cosmic vistas excite the imagination like the Orion Nebula. Also known as M42, the nebula's glowing gas surrounds hot young stars at the edge of an immense interstellar molecular cloud only 1,500 light-years away. The Orion Nebula offers one of the best opportunities to study how stars are born partly because it is the nearest large star-forming region, but also because the nebula's energetic stars have blown away obscuring gas and dust clouds that would otherwise block our view - providing an intimate look at a range of ongoing stages of starbirth and evolution. The featured image of the Orion Nebula is among the sharpest ever, constructed using data from the Hubble Space Telescope. The entire Orion Nebula spans about 40 light years and is located in the same spiral arm of our Galaxy as the Sun.",
          title: "Orion Nebula: The Hubble View"
        }
      }
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({ data: {
        url: 'https://apod.nasa.gov/apod/image/2106/OrionNebula_HubbleSerrano_2362.jpg',
        explanation: "Few cosmic vistas excite the imagination like the Orion Nebula. Also known as M42, the nebula's glowing gas surrounds hot young stars at the edge of an immense interstellar molecular cloud only 1,500 light-years away. The Orion Nebula offers one of the best opportunities to study how stars are born partly because it is the nearest large star-forming region, but also because the nebula's energetic stars have blown away obscuring gas and dust clouds that would otherwise block our view - providing an intimate look at a range of ongoing stages of starbirth and evolution. The featured image of the Orion Nebula is among the sharpest ever, constructed using data from the Hubble Space Telescope. The entire Orion Nebula spans about 40 light years and is located in the same spiral arm of our Galaxy as the Sun.",
        title: "Orion Nebula: The Hubble View"
      }})
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
  const city = req.body.city
  const data = req.body.data

  let tableData = ''
  data.forEach(e => {
    let date = new Date(e.rise.utc_datetime).toLocaleDateString('id')
    let riseTime = new Date(e.rise.utc_datetime).toLocaleTimeString('en-GB')
    let culminationTime = new Date(e.culmination.utc_datetime).toLocaleTimeString('en-GB')
    let setTime = new Date(e.set.utc_datetime).toLocaleTimeString('en-GB')

    let riseVisibility
    let culminationVisibility
    let setVisibility
    if (e.rise.visible) {
      riseVisibility = 'Yes'
    } else {
      riseVisibility = 'No'
    }
    if (e.culmination.visible) {
      culminationVisibility = 'Yes'
    } else {
      culminationVisibility = 'No'
    }
    if (e.set.visible) {
      setVisibility = 'Yes'
    } else {
      setVisibility = 'No'
    }

    tableData += `
    <tr>
      <td>${date}</td>
      <td>${e.rise.alt}°</td>
      <td>${e.rise.az}°</td>
      <td>${riseTime}</td>
      <td>${riseVisibility}</td>
      <td>${e.culmination.alt}°</td>
      <td>${e.culmination.az}°</td>
      <td>${culminationTime}</td>
      <td>${culminationVisibility}</td>
      <td>${e.set.alt}°</td>
      <td>${e.set.az}°</td>
      <td>${setTime}</td>
      <td>${setVisibility}</td>
    </tr>
    `
  })

  let html = `
  <h3>Thank you for using findISS! This is the prediction result you requested.</h3>
  <h4>City: ${city}</h4>
  <table border="1">
    <col>
    <colgroup span="3"></colgroup>
    <colgroup span="3"></colgroup>
    <tr>
      <th rowspan="2">Date</th>
      <th colspan="4" scope="colgroup">Rise</th>
      <th colspan="4" scope="colgroup">Culmination</th>
      <th colspan="4" scope="colgroup">Set</th>
    </tr>
    <tr>
      <th scope="col">Alt</th>
      <th scope="col">Azimuth</th>
      <th scope="col">Time</th>
      <th scope="col">Visible</th>
      <th scope="col">Alt</th>
      <th scope="col">Azimuth</th>
      <th scope="col">Time</th>
      <th scope="col">Visible</th>
      <th scope="col">Alt</th>
      <th scope="col">Azimuth</th>
      <th scope="col">Time</th>
      <th scope="col">Visible</th>
    </tr>
    ${tableData}
  </table>

  regards,

  findIss
  `

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
    html
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