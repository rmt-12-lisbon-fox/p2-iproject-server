const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://deco-model-server.herokuapp.com/webhooks/rest'
})

module.exports = instance