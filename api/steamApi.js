const steamApi = require('steamapi');
const steam = new steamApi('9D8345D36DB3BF8E9FB1A5F2E03D547D')

function getIdSteam(username){
  // console.log(username,'<<<<<<<<<<<<<<<<user');
  steam.resolve(username)
    .then((id)=>{
      // console.log(id,'<<<<<<<<<<<<<<,');
      return steam.getUserSummary(id)
    })
    .then((summary)=>{
      // console.log(summary,'<<<<<<<<<<<<<');
      return summary
    })
    .catch((err)=>{
      console.log(err,'<<<<<<<<<<<<<<<<<');
    })
}

module.exports = getIdSteam