function errorHandler(err, req, res, next) {
    let code = +err.code
    let msg = err.msg
    // console.log(err, 'MESSSAAAGGEEEEEEE')

    if(!code) {
        msg = []
        code = 400
        if (err.name === 'SequelizeUniqueConstraintError' || err.name === 'SequelizeValidationError') {
            err.errors.forEach(ele => {
                msg.push(ele.message)
            })
        }
    }

    if (!msg) {
        switch (code) {
            case 400:
            msg = 'Bad Request Error'
                break;
            case 401:
            msg = 'Unauthorized Error'
                break;
            case 403:
            msg = 'Forbidden Error'
                break;
            case 404:
            msg = 'Not Found Error'
                break;
            case 500:
            msg = 'Internal Server Error'
                break;
        }
    }
    res.status(code).json({ code, msg })
}

module.exports = errorHandler