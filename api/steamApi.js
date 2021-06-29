const steamApi = require('steamapi')
const steam = new steamApi(process.env.STEAM_API)

function getIdSteam(username){
  return steam.resolve(username)
    .then((id)=>{
      return steam.getUserSummary(id)
    })
}

function getNewsSteam(game) {
  return steam.getGameNews(game)
  .then((data)=>{
    console.log(data);
    data.forEach(el=>{
      console.log(el.contents);
    })
  })
  .catch((err)=>{
    console.log(err);
  })
}

module.exports = {getIdSteam,getNewsSteam}