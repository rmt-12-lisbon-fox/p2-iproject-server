const jwt = require('jsonwebtoken')

function jwtCreate(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET)
}

function jwtCheck(token) {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = {
    jwtCreate,
    jwtCheck
}