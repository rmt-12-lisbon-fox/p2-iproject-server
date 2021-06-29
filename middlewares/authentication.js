const {validateJWT} = require('../helpers/jwt');
const {User} = require('../models');

function authentication(req,res,next) {
    const access_token = req.headers.access_token

    if(access_token) {
        try{
            const payload = validateJWT(access_token)
            User.findByPk(payload.id)
            .then(user => {
                if(user) {
                    req.user = payload
                    next()
                } else {
                    res.status(401).json({message: 'Cannot find user'})
                    next({name: "CannotFindUser"})
                }
            })
            .catch(err => {
                res.status(500).json({message: err.message})

            })
        } catch(err) {
            res.status(500).json({message: "Invalid JWT"})
        }
    } else {
        res.status(401).json({message: 'Please login first'})
    }   
}

module.exports = authentication