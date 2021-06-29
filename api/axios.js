const axios = require('axios')

const nasa_API = axios.create({
  baseURL: 'https://api.nasa.gov/planetary'
})

const ipstack_API = axios.create({
  baseURL: 'http://api.ipstack.com/check'
})

const satDev_API = axios.create({
  baseURL: 'https://satellites.fly.dev/passes'
})

module.exports = { nasa_API, ipstack_API, satDev_API }