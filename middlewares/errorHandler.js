function errorHandler(err, req, res, next) {
    
    let code = err.code;
    let message = [];

    if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        code = 400
        err.errors.forEach(e => {
            message.push(e.message)
        })
    } else if (code === 401) {
        code = err.code;
        message.push(err.message);
    } else if (code === 404) {
        message.push("Error not Found")
    } else {
        code = 500;
        message.push("Internal server error");
    }
    res.status(code).send({
        code,
        message
    })
}


module.exports = errorHandler