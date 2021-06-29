const axios = require('axios')

const instance = axios.create({
  baseURL: 'http://localhost:5005/webhooks/rest'
})

module.exports = instance