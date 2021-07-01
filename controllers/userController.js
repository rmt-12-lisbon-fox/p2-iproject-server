const { User } = require ( '../models' )
const { decode } = require ( '../helpers/bcryptjs' )
const { sign } = require ( '../helpers/jwt' )

class userController {
  static register ( req, res, next ) {
    const dataRegis = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    }
    User.create ( dataRegis )
    .then ( ( User ) => {
      res.status ( 201 ).json ( { id: User.id, email: User.email } )
    } )
    .catch ( ( err ) => {
      
      next ( err ) 
    } )
  }

  static login ( req, res, next ) {
    const { email, password } = req.body
    User.findOne ( {
      where: {
        email
      }
    } )
    .then ( ( foundUser ) => {
      if ( foundUser ) {
        const comparePassword = decode ( password, foundUser.password )
        
        if ( comparePassword ) {
          const access_token = sign ( {
            id: foundUser.id,
            email: foundUser.email
          } )
          res.status ( 200 ).json ( { id: foundUser.id, email: foundUser.email, access_token } )
        } else {
          throw { status: 400, message: 'Wrong Email or Password' }
        }
      } else {
        throw { status: 404, message: 'Not Found' }
      }
    } )
    .catch ( ( err ) => {
      
      next ( err )
    } )
  }

}

module.exports = userController