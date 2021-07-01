const { getIdSteam,getNewsSteam } = require('../api/steamApi')
const { User,Profile } = require('../models')
const { generateToken } =require('../helpers/jwt')
const {videoGrab,mostPopularVideo} = require('../api/googleApi')
const instanceDota = require('../helpers/axiosDotaHistory')
const transporter = require('../helpers/nodemailer')

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
        res.status(200).json({access_token,username:user.username})
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
          const option = {
            from: 'hangoutgamers247@outlook.co.id',
            to: email,
            Subject: 'Success To Register',
            text: `Selamat Bergabung ${username} di Hangout Gamer Dimana Gamer Bisa Berkumpul 24/7` 
          }
          transporter.sendMail(option,(err,info)=>{
            if(err) console.log(err);
            else{
              console.log(info.response,'<<<<<<<<<<<<<<<<<<<<<<<<<'); 
            }
          })
        res.status(201).json(newUser)
        let userProfile = await Profile.create({name,phoneNumber,address,UserId:newUser.id})
      }
    } catch (error) {
      res.status(500).json({message:error.message})
    }
  }
  static getNews(req,res,next){
    let game = req.body.gameId
    let allNews = []
    getNewsSteam(game)
    .then((data)=>{
      data.forEach(el=>{
        console.log(el);
        allNews.push({news:el.contents})
      })
      res.status(200).json(allNews)
    })
    .catch((err)=>{
      console.log(err);
    })
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
    let cardName = req.body.cardName
    console.log(cardName,  '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    instanceDota({
      method:'GET',
      url:`/cards/search/${cardName}`
    })
    .then(({data}) =>{
      // console.log(data);
      let allCard = []
      data.forEach(el=>{
        let item = {
          name: el.name,
          type: el.type,
          cost: el.cost,
          image:el.img
        }
        // console.log(allCard);
        allCard.push(item)
      })
      res.status(200).json(allCard)
      console.log(allCard);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  static mostVideo (req,res,next) {
    mostPopularVideo()
    .then((response)=>{
      let eachItem = []
      let item = response.data.items
      item.forEach(element => {
        // console.log(element);
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
}

module.exports = UserController