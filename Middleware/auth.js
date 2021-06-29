const { jwtVerify } = require('../Helper/jwt');
const { Review } = require('../models');


async function authN(req, res, next) {
    let token = req.headers.access_token;

    if (token) {
        try {
            let payload = await jwtVerify(token);
            req.user = payload;
            next();
        } catch (err) {
            res.status(401).json({ message: err });
        }
    }else {
        res.status(401).json({ message: 'You need to login first' });
    }
}

async function authZ(req, res, next) {
    let id = req.params.id;
    try {
        let result = await Review.findOne({
            where: {
                id
            }
        });
        if (result) {
            if (result.UserId === req.user.id){
                next();
            }else {
                throw 403;
            }
        }else {
            throw 403
        }
    } catch (err) {
        if (err === 403) {
            res.status(err).json({ message: 'Unauthorized' })
        }else {
            res.status(500).json({ message: err });
        }
    }
}

module.exports = {
    authN,
    authZ
}