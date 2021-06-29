

function errorHandler (err, req, res, next) {
  if (err.code === 500) {
    err.message = err.messsage || 'Internal Server Error'
  } else if (err.code === 400) {
    err.message = err.message || 'Bad request'
  } else if (err.code === 401) {
    err.message = err.message || 'Invalid or Wrong JWT'
  }
  res.status(err.code).json({ message: err.message })
}

module.exports = errorHandler