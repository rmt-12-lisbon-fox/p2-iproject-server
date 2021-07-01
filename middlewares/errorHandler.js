function errorHandler (err, req, res, next) {
  let code = err.code || 500
  let message = err.message || "server eror bang"
  console.log(err, `<<< 24`)

  if (err.name === "SequelizeValidationError") {
    message = err.errors[0].message
    code = 400
  }

  if (err.name === "SequelizeUniqueConstraintError") {
    message = "email is already exists"
    code = 400
  }

  res.status(code).json({ message : message })
}

module.exports = errorHandler