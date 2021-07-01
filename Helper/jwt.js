const jwt = require('jsonwebtoken');

function jwtSign(payload) {
    return jwt.sign(payload, process.env.SECRET);
}

async function jwtVerify(token) {
    try {
        let result = await jwt.verify(token, process.env.SECRET);
        return result;
    } catch (err) {
        throw 'invalid token';
    } 
}

module.exports = {
    jwtSign,
    jwtVerify
}