const { jwtVerify } = require('../Helper/jwt');
const { User } = require('../models');


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

module.exports = {
    authN
}