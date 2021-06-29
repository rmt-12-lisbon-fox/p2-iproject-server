

function errorHandler (err, req, res, next) {
  if (err.code === 500) {
    err.message = err.messsage || 'Internal Server Error'
  }
  res.status(err.code).json({ message: err.message })
}

module.exports = errorHandler