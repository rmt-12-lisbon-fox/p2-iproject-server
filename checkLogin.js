const { User } = require('./models')
const jwt = require('jsonwebtoken')

function checkLogin(req, res, next) {
    const access_token = req.headers.access_token
    if (access_token) {
        let payload = jwt.verify(access_token, 'rahasia')

        User.findByPk(payload.id)
        .then( data => {
            req.user = data
            next()
        })
        .catch(err => res.status(500).json({message : `internal server error`}))
    } else {
        res.status(401).json({message : `please login first`})
    }
}

module.exports = checkLogin