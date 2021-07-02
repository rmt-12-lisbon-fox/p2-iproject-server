function errHendler(err, req, res, next) {
    let code = err.code || 500;
    let message;

    if (err.name === 'SequelizeValidationError' || code === 500) {
        code = 500;
        message = err.message || 'internal service error';
    }
    if (code === 400) {
        code = 400;
        message = err.message;
    }
    if (code === 401) {
        code = 401;
        message = err.message;
    }
    if (code === 403) {
        code = 402;
        message = 'Forbidden to Access';
    }
    if (code === 404) {
        code = 404;
        message = 'User Not Found';
    }
    if (code === 200) {
        code = 200;
        message = message;
    }

    res.status(code).json({
        code,
        message,
    })
}

module.exports = errHendler