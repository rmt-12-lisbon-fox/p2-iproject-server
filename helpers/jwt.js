const jwt = require('jsonwebtoken');

function generateJWT(payload){
  let token = jwt.sign(payload, 'rahasia');
  return token
}

function decodeJWt(req){
  console.log(req.headers, `<< ini req`)
  let data = jwt.verify(req.headers.access_token, 'rahasia');
  return data
}

module.exports = { decodeJWt, generateJWT }