const {google} = require('googleapis')

const youtube = google.youtube('v3')

function videoGrab (title){
  console.log(process.env.GOOGLE_KEY);
  return youtube.search.list({
    // key:'AIzaSyCECZpUw1kmC4PuY4JHNTCAMvxSeKXW188',
    key:process.env.GOOGLE_KEY,
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
      // key:'AIzaSyCECZpUw1kmC4PuY4JHNTCAMvxSeKXW188',
      key:process.env.GOOGLE_KEY,
      part:['player','snippet'],
      id:videoId
    })
  })

}

module.exports = videoGrab