const steamKey = require('../api/steamApi')

class UserController{
  static steamLogin (req,res,next) {
    let steamProfile = steamKey(req.body.username)
    console.log(steamProfile);
  }
  static login(req,res,next) {

  }
}

module.exports = UserController