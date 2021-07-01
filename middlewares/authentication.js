const { verify } = require ( '../helpers/jwt' )
const { User } = require ( '../models/index' )

async function authentication ( req, res, next ) {
  try {
    if ( !req.headers.access_token ) {
      throw { status: 401, message: "Please login or register first" }
    }
    const decoded = verify ( req.headers.access_token )
    const foundUser = await User.findByPk ( decoded.id )
    if ( foundUser ) {
      req.loggedUser = {
        id: decoded.id,
      }
      next ()
    } else {
      throw { status: 401, message: "Invalid Access" }
    }
  } catch ( err ) {
    const status = err.status || 500
    const message = err.message || "Internal Server Error"
    res.status ( status ).json ( { message } )
  }
}

module.exports = authentication