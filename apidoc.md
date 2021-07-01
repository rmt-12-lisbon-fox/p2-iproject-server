# My Job Finder App Server
My Hangout Gamer App is an application to chatting and watching e-sport together. This app has : 
* RESTful endpoint
* JSON formatted response
&nbsp;

## RESTful endpoints
### Post /Register

> Create New User

_Request Header_
```
none
```

_Request Body_
```
{
  "username":"string",
  "password":"string",
  "email":"string",
  "name":"string",
  "phoneNumber":"string",
  "address":"string",
}
```

_Response (201 - created)_
```
{
    "id": 11,
    "username": "tester123",
    "password": "$2a$10$l6gw0vkzkM..NyPaNYx5Q.sWFxf81uPfiFxxVAJXuU3buwE8ims/G",
    "email": "tester2@mail.com",
    "updatedAt": "2021-06-30T22:04:44.860Z",
    "createdAt": "2021-06-30T22:04:44.860Z"
}
```

_Response (400 - Bad Request)_
```
{
 "message": "User Already Exists"
}
```
_Response (500 - internal server error)_
```
{
    "message":"<string>"
}
```
---
### Post /login

> Logging in to server

_Request Header_
```
none
```

_Request Body_
```
{
not needed
}
```

_Response (200 - ok)_
```
{
   {
    "access_token":"string",
    "username": "tester"
}
}
```

_Response (500 - internal server error)_
```
{
  "message": "<string>"
}
```
### GET /popularVideos

> Get the most popular video at youtube

_Request Header_
```
{
    "access_token" = "string"
}
```

_Request Body_
```
{
not needed
}
```

_Response (200 - ok)_
```

{
  Videos:[
      {
          "title": "Olivia Rodrigo - SOUR Prom",
          "url": "<iframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/9syCTdjUhCA\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
      },
      {
          "title": "Lil Baby & Lil Durk - Man of my Word (Official Video)",
          "url": "<iframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/6v6HN2pm5pE\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
      },
      {
          "title": "Cell Phone Stereotypes",
          "url": "<iframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/2EGuVKx_MXA\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
      },
      {
          "title": "Switzerland ELIMINATES France! Euro 2020 favorite out on penalties! | Highlights | ESPN FC",
          "url": "<iframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/DhSz5BdtCrM\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
      },
      {
          "title": "LOKI Episode 4 Breakdown & Ending Explained Spoiler Review | MCU Easter Eggs & Post Credits Scene",
          "url": "<iframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/uMbE_VCKhtE\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
      }
    ]
}
```

_Response (500 - internal server error)_
```
{
  "message": "<string>"
}
```
### Post /videos

> Get Videos From Youtube Based On Title

_Request Header_
```
{
    "access_token" = "string"
}
```

_Request Body_
```

{
    title:'string'
}

```

_Response (200 - ok)_
```

{
  Videos:{
    [
      {
          "title": "BOOM vs EXECRATION - TI10 SEA QUALIFIER The International 2021 Dota 2 Highlights",
          "url": "<iframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/WlaB2P5hzqg\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
      },
      {
          "title": "The International 10 SEA Qualifier | MG.Trust vs OB.Neon | Cast by VEENOMON",
          "url": "<iframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/PerIx3RI2Zo\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
      },
      {
          "title": "TNC vs SMG - Mushi Coach vs MidOne - TI10 SEA QUALIFIER DOTA 2",
          "url": "<iframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/MDpSlsYA-5c\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
      },
      {
          "title": "Квалификации на The International 10 от Maincast | Stream A. 30 Июня [4k]",
          "url": "<iframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/EXPPv9sWRlM\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
      },
      {
          "title": "EMPIRE vs SPIRIT - GRAND FINAL - TI10 EEU QUALIFIER DOTA 2",
          "url": "<iframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/jLuHzgALfQs\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
      }
    ]
  }
}
```

_Response (500 - internal server error)_
```
{
  "message": "<string>"
}
```
### POST /News

> Get News On Steam Based On appId

_Request Header_
```
{
    "access_token" = "{Id,Email,Role}"
}
```
_Request Body_
```
{
    "gameId":570
}
```
_Response (200 - ok)_
```
{
  News:{
    [
      {
          "news": "<a href=\"https://steamdb.info/patchnotes/6958185/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS\"><img src=\"https://steamdb.info/patchnotes/6958185.png\"><br>Read patchnotes on SteamDB...</a>"
      },
      {
          "news": "<a href=\"https://steamdb.info/patchnotes/6955507/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS\"><img src=\"https://steamdb.info/patchnotes/6955507.png\"><br>Read patchnotes on SteamDB...</a>"
      },
      {
          "news": "<a href=\"https://steamdb.info/patchnotes/6952773/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS\"><img src=\"https://steamdb.info/patchnotes/6952773.png\"><br>Read patchnotes on SteamDB...</a>"
      },
      {
          "news": "<a href=\"https://steamdb.info/patchnotes/6952336/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS\"><img src=\"https://steamdb.info/patchnotes/6952336.png\"><br>Read patchnotes on SteamDB...</a>"
      },
      {
          "news": "[list]\n[*] Fixed a pathfinding issue with stationary units and body blocking.\n[*] New teams have been added to the Supporters Club.\n[/list]"
      },
      {
          "news": "<a href=\"https://steamdb.info/patchnotes/6952142/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS\"><img src=\"https://steamdb.info/patchnotes/6952142.png\"><br>Read patchnotes on SteamDB...</a>"
      },
      {
          "news": "<a href=\"https://steamdb.info/patchnotes/6947721/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS\"><img src=\"https://steamdb.info/patchnotes/6947721.png\"><br>Read patchnotes on SteamDB...</a>"
      },
      {
          "news": "<a href=\"https://steamdb.info/patchnotes/6937568/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS\"><img src=\"https://steamdb.info/patchnotes/6937568.png\"><br>Read patchnotes on SteamDB...</a>"
      },
      {
          "news": "<a href=\"https://steamdb.info/patchnotes/6936988/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS\"><img src=\"https://steamdb.info/patchnotes/6936988.png\"><br>Read patchnotes on SteamDB...</a>"
      },
      {
          "news": "<a href=\"https://steamdb.info/patchnotes/6935214/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS\"><img src=\"https://steamdb.info/patchnotes/6935214.png\"><br>Read patchnotes on SteamDB...</a>"
      },
      {
          "news": "<a href=\"https://steamdb.info/patchnotes/6930256/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS\"><img src=\"https://steamdb.info/patchnotes/6930256.png\"><br>Read patchnotes on SteamDB...</a>"
      },
      {
          "news": "<img src=\"https://cdn.mos.cms.futurecdn.net/mY5Q5QExHtF6YTvrx3tTuF.jpg\"/><br><br>\n                The annual Dota 2 championship tournament known as The International was slated to take place in Stockholm this year, but earlier this week Valve said that it was \"<a href=\"https://www.pcgamer.com/dota-2-championship-must-move-because-sweden-wont-classify-it-as-an-elite-sporting-event/\">looking for possible alternatives</a>\" for a host city. The Swedish government refused to classify the tourney as an \"elite sporting event,\" and without that classification it&apos;s possible that players could be denied entry into the country because of Covid-19 restrictions...\n                <a href=\"https://www.pcgamer.com/swedish-esports-association-confirms-the-international-10-will-be-moved?utm_source=steam&utm_medium=referral\" target=\"_blank\">Read more.</a>"
      },
      {
          "news": "<img src=\"https://assets2.rockpapershotgun.com/dota-2-nemestice.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/dota-2-nemestice.jpg\" /> <p><a href=\"https://www.rockpapershotgun.com/games/dota-2\">Dota 2</a>'s summer Nemestice event has kicked off alongside a new battle pass. The <a href=\"https://www.dota2.com/nemestice\">official microsite</a> of what it includes just goes on and on, but among the list is Davion of Dragon Hold, pictured above, the star of Netflix's Dota 2 anime.\n</p>\n <p><a href=\"https://www.rockpapershotgun.com/dota-2s-nemestice-event-and-new-battle-pass-underway\">Read more</a></p>"
      },
      {
          "news": "<a href=\"https://steamdb.info/patchnotes/6929026/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS\"><img src=\"https://steamdb.info/patchnotes/6929026.png\"><br>Read patchnotes on SteamDB...</a>"
      },
      {
          "news": "<p><p>Valve have updated Dota 2 with a major new release featuring not only a brand new Battle Pass and a big new event, they also added in AMD FidelityFX Super Resolution.</p><p><img src=\"https://www.gamingonlinux.com/uploads/articles/tagline_images/797657756id19289gol.jpg\" alt /></p><p>Read the full article here: https://www.gamingonlinux.com/2021/06/dota-2-gets-amd-fidelityfx-super-resolution-new-event-and-battle-pass</p></p>"
      },
      {
          "news": "<a href=\"https://steamdb.info/patchnotes/6924357/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS\"><img src=\"https://steamdb.info/patchnotes/6924357.png\"><br>Read patchnotes on SteamDB...</a>"
      },
      {
          "news": "<a href=\"https://steamdb.info/patchnotes/6923734/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS\"><img src=\"https://steamdb.info/patchnotes/6923734.png\"><br>Read patchnotes on SteamDB...</a>"
      },
      {
          "news": "<a href=\"https://steamdb.info/patchnotes/6923313/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS\"><img src=\"https://steamdb.info/patchnotes/6923313.png\"><br>Read patchnotes on SteamDB...</a>"
      },
      {
          "news": "<a href=\"https://steamdb.info/patchnotes/6923176/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS\"><img src=\"https://steamdb.info/patchnotes/6923176.png\"><br>Read patchnotes on SteamDB...</a>"
      },
      {
          "news": "<a href=\"https://steamdb.info/patchnotes/6921658/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS\"><img src=\"https://steamdb.info/patchnotes/6921658.png\"><br>Read patchnotes on SteamDB...</a>"
      }
    ]
  }
}
```

### POST /historymatch

> Get Card Detail From Heartstone Based On Name

_Request Header_
```
{
    "access_token" = "{Id,Email,Role}"
}
```
_Request Body_
```
{
    "cardName" = "string"
}
```
_Response (200-ok)_
```
{
  Card:{
    [
      {
        "name": "Shadowhoof Slayer",
        "type": "Minion",
        "cost": 1,
        "image": "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f9916908c0491fb906dc8a5c9a3e044cbe69cf1c0bd221612563499d094c2fe4.png"
      }
    ]
  }
}
```

