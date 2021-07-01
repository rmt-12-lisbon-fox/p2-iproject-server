const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://deco-model-server.herokuapp.com/webhooks/rest'
  // baseURL: 'http://localhost:5005/webhooks/rest'
})

module.exports = instance