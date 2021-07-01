const axios = require('axios')

const instanceAxios = axios.create({
  baseURL:'https://omgvamp-hearthstone-v1.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': 'cb1d05c8c8msh2e8e1d42b21044ap1a8544jsnb3d00ce6da57',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
})

module.exports = instanceAxios