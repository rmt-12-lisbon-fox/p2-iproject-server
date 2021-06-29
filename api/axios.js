const axios = require('axios')

const nasa_API = axios.create({
  baseURL: 'https://api.nasa.gov'
})

const nominatim_API = axios.create({ // detail user location
  baseURL: 'https://nominatim.openstreetmap.org'
})

const satDev_API = axios.create({
  baseURL: 'https://satellites.fly.dev'
})

module.exports = { nasa_API, nominatim_API, satDev_API }