const axios = require('axios')
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const instance = axios.create({
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'accept-encoding': 'application/gzip',
        'x-rapidapi-key': process.env.GOOGLE_TRANSLATE_KEY,
        'x-rapidapi-host': 'google-translate1.p.rapidapi.com'
      },
  });

module.exports = instance 