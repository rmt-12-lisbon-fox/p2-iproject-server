function errorHandler ( err, req, res, next ) {
  let status = err.status
  let errors = []
  // console.log (  err, ' >> ini erorr handler')

  if ( err.name === "SequelizeUniqueConstraintError" ) {
    err.errors.forEach( element => {
      errors.push ( element.message )
    });
    status = 400
  } else if ( err.name === "SequelizeValidationError" ) {
    err.errors.forEach( element => {
      errors.push ( element.message )
    });
    status = 400
  } else if ( err.name === "JsonWebTokenError" ) {
    errors.push ( "Please Login First" )
    status = 401
  } else {
    status = err.status || 500
    let message = err.message || "Internal Server Error"
    errors.push ( message )
  }
  res.status ( status ).json ( { errors } )
}

module.exports = errorHandler