const { getIdSteam,getNewsSteam } = require('../api/steamApi')
const { User } = require('../models')
const { generateToken } =require('../helpers/jwt')
const videoGrab = require('../api/googleApi')
const instanceDota = require('../helpers/axiosDotaHistory')

class UserController{
  static async steamLogin (req,res,next) {
    let steamProfile = getIdSteam(req.body.username)
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
        let access_token = generateToken({id:user.id,username:user.username})
        console.log(access_token);
        res.status(200).json({access_token})
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
  static getNews(req,res,next){
    let game = req.body.game
    let news =  getNewsSteam(game)
  }
  static getVideo(req,res,next){
    let { title } = req.body
    let video = videoGrab(title)
    .then((response)=>{
      console.log(response.data.items);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  static getHistory (req,res,next) {
    let matchId = req.body.matchId
    instanceDota({
      method:'GET',
      url:'/GetMatchDetails/V001/',
      params:{
        matches_requested: matchId,
        match_id:matchId
      }
    })
    .then(({data}) =>{
      console.log(data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}

module.exports = UserController