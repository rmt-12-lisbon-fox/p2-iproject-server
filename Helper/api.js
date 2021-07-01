const axios = require('axios');

const imageKitAPI = axios.create({
    baseURL: 'https://upload.imagekit.io/api/v1'
});

const unogsAPI = axios.create({
    baseURL: 'https://unogsng.p.rapidapi.com'
});

module.exports = {
    imageKitAPI,
    unogsAPI
}