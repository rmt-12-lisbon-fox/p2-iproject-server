const axios = require('axios')
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
  }
const NewsAPI = require('newsapi');

let newsapi = new NewsAPI(process.env.NEWSAPI_KEY);

module.exports = newsapi 