const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://coughapi.p.rapidapi.com',
    headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': process.env.COUGH_RAPID_API_KEY,
        'x-rapidapi-host': process.env.COUGH_RAPID_API_HOST
    }
});

module.exports = instance;