const axios = require("axios");

function grammerCheck(req, res, next) {
  axios({
    url: "https://dnaber-languagetool.p.rapidapi.com/v2/check",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "x-rapidapi-key": "7ff53537d2mshc56650bd4d1329dp1d1632jsn296a8d66c1cf",
      "x-rapidapi-host": "dnaber-languagetool.p.rapidapi.com",
    },
    method: "POST",
    params: {
      text: "This is a error.",
      language: "en-US",
    },
  })
    .then(({ data }) => {
      req.grammerCheck = data;
    })
    .catch((err) => {
      next({ statusCode: 500 });
    });
}

module.exports = grammerCheck;
