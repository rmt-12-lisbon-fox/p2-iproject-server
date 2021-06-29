const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://coronavirus-symptoms-predictor1.p.rapidapi.com/',
    headers: {
        "x-rapidapi-key": process.env.CORONA_RAPID_API_KEY,
        "x-rapidapi-host": process.env.CORONA_RAPID_API_HOST
    }
});

module.exports = instance;