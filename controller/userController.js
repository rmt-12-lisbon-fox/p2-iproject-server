const steamKey = require('../api/steamApi')
const { User } = require('../models')
const { generateToken } =require('../helpers/jwt')

class UserController{
  static async steamLogin (req,res,next) {
    let steamProfile = steamKey(req.body.username)
    console.log(steamProfile);
    // if(steamProfile){
    //   User.findOne({
    //     where:{
    //       username
    //     }
    //   })
    // }
  }
  static async login(req,res,next) {
    let {username,password} = req.body
    try {
      let user = await User.findOne({where:{username}})
      if(user){
        let token = generateToken({id:user.id,username:user.username})
        res.status(200).json(token)
      }else{
        res.status(400).json({message:'User not found'})
      }  
    } catch (error) {
      res.status(500).json({message:error.message})
    }
  }
  static async register(req,res,next) {
    let {username,password,email} = req.body
    try {
      let check = await User.findOne({username})
      if(check){
        res.status(400).json({message:'User Already Exists'})
      }else{
        let newUser = await User.create({username,password,email})
        console.log(newUser);
        res.status(201).json(newUser)
      }
    } catch (error) {
      res.status(500).json({message:error.message})
    }
  }
}

module.exports = UserController