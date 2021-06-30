const axios = require('axios');

const country = axios.create({
    baseURL: 'https://countriesnow.space/api/v0.1/countries',
});

const worldGeo = axios.create({
    baseURL: 'https://world-geo-data.p.rapidapi.com/',    
})

const travelPlaces = axios.create({
    baseURL: 'https://travel-places.p.rapidapi.com/',    
})

const webSearch = axios.create({
    baseURL: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/',    
})

module.exports = {
    country,
    worldGeo,
    travelPlaces,
    webSearch
};