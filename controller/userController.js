const { getIdSteam,getNewsSteam } = require('../api/steamApi')
const { User,Profile } = require('../models')
const { generateToken } =require('../helpers/jwt')
const videoGrab = require('../api/googleApi')
const instanceDota = require('../helpers/axiosDotaHistory')

class UserController{
  static steamProfile (req,res,next) {
    getIdSteam(req.body.username)
    .then((summary)=>{
      console.log(summary.nickname);
    })
    .catch((err)=>{
      console.log(err,'<<<<<<<<<<<<<<<<<');
    })
  }
  static async login(req,res,next) {
    let {username,password} = req.body
    try {
      let user = await User.findOne({where:{username}})
      console.log(user);
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
    let {username,password,email,name,phoneNumber,address} = req.body
    try {
      let check = await User.findOne({where:{username}})
      if(check){
        res.status(400).json({message:'User Already Exists'})
      }else{
        let newUser = await User.create({username,password,email})
        console.log(newUser);
        res.status(201).json(newUser)
        let userProfile = await Profile.create({name,phoneNumber,address,UserId:newUser.id})
      }
    } catch (error) {
      res.status(500).json({message:error.message})
    }
  }
  static getNews(req,res,next){
    let game = req.body.game
    let data = getNewsSteam(game)
    // .then((data)=>{
    //   data.forEach(el=>{
    //     console.log(el.contents);
    //   })
    // })
    // .catch((err)=>{
    //   console.log(err);
    // })
  }
  static getVideo(req,res,next){
    console.log(req.body);
    let { title } = req.body
    videoGrab(title)
    .then((response)=>{
      let eachItem = []
      let item = response.data.items
      item.forEach(element => {
        console.log(element);
        let data = {
          title:element.snippet.title,
          url:element.player.embedHtml
        }
        eachItem.push(data)
      });
      res.status(200).json(eachItem)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  static getHistory (req,res,next) {
    let matchId = req.body.matchId
    console.log(matchId,  '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
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