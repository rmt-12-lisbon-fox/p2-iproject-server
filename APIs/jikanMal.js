var axios = require("axios")
require('dotenv').config()

const instance = axios.create({
    baseURL: 'https://jikan1.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': process.env.RAPID_API_KEY,
        'x-rapidapi-host': 'jikan1.p.rapidapi.com'
    }
});

module.exports = instance