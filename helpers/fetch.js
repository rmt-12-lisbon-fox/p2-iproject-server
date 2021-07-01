const fetch = require('node-fetch');

const myAPIKey = 'ppvNfyprcLUF712dCyE7gIjx6z1RKDUlgjHb0b0f'

function getAPIData(food) {
  return fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&pageSize=3&api_key=${myAPIKey}&dataType=Survey%20(FNDDS)`)
      .then(res => res.json())
      
}

function searchById(id) {
  return fetch(`https://api.nal.usda.gov/fdc/v1/food/${id}?nutrients=208,205,269,203,204,601&api_key=${myAPIKey}`)
      .then(res => res.json())
}


module.exports = {getAPIData, searchById}


