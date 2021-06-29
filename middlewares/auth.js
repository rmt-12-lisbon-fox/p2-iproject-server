const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

function authentication (req,res,next) {
  const token = req.headers.access_token

  try {
    if(token){
      const checkToken = verifyToken(token)
      console.log(checkToken);
      User.findOne({where:{username:checkToken.username}})
      .then((data)=>{
        if(data){
          console.log(data);
          req.user = {id:data.id,username:data.username}
          next()
        }else{
          res.status(401).json({message:"invalid token"})
        }
      })
      .catch((err)=>{
        res.status(500).json({message:err.message})
      })
    }else{
      res.status(401).json({message:"invalid token"})
    }
  } catch (error) {
    res.status(401).json({message:"invalid token"})
  }
}

module.exports = authentication