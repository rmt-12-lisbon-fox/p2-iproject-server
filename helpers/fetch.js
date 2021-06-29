const fetch = require('node-fetch');

const myAPIKey = 'ppvNfyprcLUF712dCyE7gIjx6z1RKDUlgjHb0b0f'

function getAPIData(food) {
  return fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&pageSize=2&api_key=${myAPIKey}`)
      .then(res => res.json())
      
}


module.exports = getAPIData

