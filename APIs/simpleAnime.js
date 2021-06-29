const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://simpleanime.p.rapidapi.com/anime',
    timeout: 1000,
    headers: {
        'x-rapidapi-key': '9d9e4ebd6bmshff885628f4d9cf1p16858ajsn174df4c13a05',
        'x-rapidapi-host': 'simpleanime.p.rapidapi.com'
    }
});

module.exports = instance