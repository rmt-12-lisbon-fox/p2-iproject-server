var jwt = require('jsonwebtoken');

function generateJWT(payload){
  var token = jwt.sign(payload, 'rahasia');
  return token
}

function decodeJWt(req){
  var data = jwt.verify(req.headers.access_token, 'rahasia');
  return data
}

module.exports = { decodeJWt, generateJWT }