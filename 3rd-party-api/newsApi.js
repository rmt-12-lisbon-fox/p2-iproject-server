const axios = require('axios')
require('dotenv').config()
const NewsAPI = require('newsapi');

let newsapi = new NewsAPI(process.env.NEWSAPI_KEY);

module.exports = newsapi 