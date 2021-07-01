var axios = require("axios").default;
var network = require('network')

let location = (req, res) => {
  network.get_public_ip(function(err, ip) {
    var options = {
      method: 'GET',
      url: `https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`,
      headers: {
        'x-rapidapi-key': '35bdcf17c8msh2f9991bf7cd8a0dp1e82a9jsn333b8bf6775a',
        'x-rapidapi-host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
      }
    }
    
    axios.request(options).then(function (response) {
      console.log(response.data.location.country);
      const country = response.data.location.country.name
      const capital = response.data.location.country.capital
      res.status(200).json({ country, capital })
    }).catch(function (error) {
      console.error(error.response, '<<<<<<< ERROR');
    });
  })
}

module.exports = location