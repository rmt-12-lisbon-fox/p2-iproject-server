const {google} = require('googleapis')

const youtube = google.youtube('v3')

function videoGrab (title){
  youtube.search.list({
    key:'AIzaSyCECZpUw1kmC4PuY4JHNTCAMvxSeKXW188',
    part:'snippet',
    q:title,
    type:'video'
  })
  .then(({data})=>{
    // console.log(data);
    let videoId=[]
    data.items.forEach(el => {
      videoId.push(el.id.videoId)
    });
    return youtube.videos.list({
      key:'AIzaSyCECZpUw1kmC4PuY4JHNTCAMvxSeKXW188',
      part:['player','snippet'],
      id:videoId
    })
  })
  .then((response)=>{
    console.log(response.data.items);
  })
  .catch((err)=>{
    console.log(err);
  })
}

module.exports = videoGrab