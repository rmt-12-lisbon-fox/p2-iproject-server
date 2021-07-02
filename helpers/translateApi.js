
const axios = require("axios").default;

// function translate(message) {
//     const options = {
//       method: 'POST',
//       url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
//       params: {'api-version': '3.0', to: 'id', textType: 'plain', profanityAction: 'NoAction'},
//       headers: {
//         'content-type': 'application/json',
//         'x-rapidapi-key': 'd447e2eeebmsh5c34458f091bb7fp1634f7jsncb83bdca020c',
//         'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com'
//       },
//       data: [{Text: `${message}`}]
//     };
    
//     axios.request(options).then(function (response) {
//         return response
//     }).catch(function (error) {
//         console.error(error);
//     });

// }

const instanceAxios = axios.create({
    baseURL: 'https://microsoft-translator-text.p.rapidapi.com',
    params: {'api-version': '3.0', to: 'id', textType: 'plain', profanityAction: 'NoAction'},
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-key': 'd447e2eeebmsh5c34458f091bb7fp1634f7jsncb83bdca020c',
      'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com'
    },
  }) 

module.exports = instanceAxios
