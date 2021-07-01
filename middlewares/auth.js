const jwt = require('jsonwebtoken')
const { Destination, MyDestination, User } = require('../models');

function authe(req, res, next) {
    const { access_token } = req.headers

    if (access_token) {


        const decoded = jwt.verify(access_token, process.env.secret);

        User.findOne({
            where: {
                id: decoded.id
            }
        })
            .then(result => {
                if (+result.id === decoded.id) {
                    req.user = {
                        id: result.id,
                        email: result.email
                    };
                    next();
                } else {
                    next({ "code": 401, "message": "Not Authorized" })
                }

            })
            .catch(err => {
                next({ "code": 401, "message": "Invalid JWT" })
            })



    } else {

        next({ "code": 401, "message": "Please login first" })

    }

}

function autho(req, res, next) {
    const { id, email } = req.user;
    const idJob = req.params.id;

    MyDestination.findOne({
        where: {
            id: idJob
        }
    })
        .then(result => {
            if (result) {
                if (+result.UserId === +id) {
                    next()
                } else {
                    next({ "code": 403, "message": "Forbidden" })

                }

            } else {
                next({ "code": 404, "message": "Not found" })
            }

        })
        .catch(err => {
            next(err)
        })


}

module.exports = {
    authe,
    autho
}