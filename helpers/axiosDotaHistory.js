const axios = require('axios')

const instanceAxios = axios.create({
  baseURL:'https://community-dota-2.p.rapidapi.com/IDOTA2Match_570',
  headers: {
    'x-rapidapi-key': 'cb1d05c8c8msh2e8e1d42b21044ap1a8544jsnb3d00ce6da57',
    'x-rapidapi-host': 'community-dota-2.p.rapidapi.com'
  },
  params:{
    key:'9D8345D36DB3BF8E9FB1A5F2E03D547D'
  }
})

module.exports = instanceAxios