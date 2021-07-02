# News Portal App Server
Kodok Sarjana is an application to read Yu-Gi-Oh! wiki and build a Yu-Gi-Oh! deck. This app has : 
* RESTful endpoint for Yu-Gi-Oh! deck's CRUD operation
* Yu-Gi-Oh! deck builder
* Yu-Gi-Oh! wiki
* JSON formatted response
* Twitter fetch for related card


## RESTful endpoints
### POST /register

> Register new account

_Request Header_
```
```

_Request Body_
```
{
    "email": <email>,
    "password": "<password>",
    "username": "<username>",
}
```

_Response (201)_
```
{
    "id: 1
    "username": "user123",
    "access_token": "TOKEN"
}
```

_Response (400 - Bad Request)_
```
{
  "message": [
      "Email must be in email format",
      "Minimum 5 characters required in password"
  ]
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---
### POST /login
> Login account

_Request Header_
```
```

_Request Body_
```
{
    "usermail": "<user email/username>",
    "password": "<user password>"
}
```

_Response (201)_
```
{
    "id: 1
    "username": "user123",
    "access_token": "TOKEN"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Error invalid username or email or password"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Error Internal Server Error"
}
```
---
### GET /wiki

> Get all cards

_Request Header_
```
```

_Request Body_
*all optional
```
{ page, size, name, type, banlist_info, atk, def, level, linkval, linkmarkers, scale, attribute, race, archetype, card_sets, card_pricesM, card_pricesL }
```

_Response (200)_
```
[
    {
        "id": 1,
        "title": "<news title>",
        "content": "<news content>",
        "imgUrl": "<news imgUrl>",
        "authorId": 1,
        "categoryId": 1,
        "createdAt": "2021-06-07T13:20:28.746Z",
        "updatedAt": "2021-06-07T13:20:28.746Z"
    }
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Error Internal Server Error"
}
```
---
### GET /wiki/attributes

> Get all card attributes

_Request Header_
```

```

_Request Body_
```
{
    "title": "<news title>",
    "content": "<news content>",
    "imgUrl": "<news imgUrl>",
    "categoryId": 1
}
```

_Response (200 - OK)_
```
[
    "EARTH",
    "WATER",
    "WIND",
    "DARK",
    "LIGHT",
    "FIRE",
    "DIVINE"
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Error Internal Server Error"
}
```
---
### GET /wiki/races

> Get all card races

_Request Header_
```

```

_Request Body_
```
```

_Response (200 - OK)_
```
[
    "Continuous",
    "Quick-Play",
    "Equip",
    "Normal",
    "Beast",
    ...
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Error Internal Server Error"
}
```
---
### GET /wiki/types

> Get all card types

_Request Header_
```

```

_Request Body_
```
```

_Response (200 - OK)_
```
[
    "Spell Card",
    "Effect Monster",
    "Normal Monster",
    "Flip Effect Monster",
    "Trap Card",
    ...
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Error Internal Server Error"
}
```
---
### GET /wiki/latest

> Get all latest card from ygoprodeck API

_Request Header_
```

```

_Request Body_
```
```

_Response (200 - OK)_
```
[
    "Spell Card",
    "Effect Monster",
    "Normal Monster",
    "Flip Effect Monster",
    "Trap Card",
    ...
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Error Internal Server Error"
}
```
---
### GET /wiki/twitterSearch

> Get all tweets with given query

_Request Header_
```

```

_Request Body_
```
{
    "query": "Dark Magician"
}
```

_Response (200 - OK)_
```
[
    {
        "text": "Hello Everyone! Today, before we close out Ancient...}
    }
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Error Internal Server Error"
}
```
---
### GET /wiki/:cardId

> Get card info with cardId

_URL Params_

```
decksId=[integer]
```

_Request Header_
```
```

_Request Body_
```
```

_Response (200 - OK)_
```
{
    "id": 2611,
    "cardId": 63251695,
    "name": "Dinomist Rex",
    "type": "Pendulum Effect Monster",
    "desc": "[ Pendulum Effect ]\r\nOnce, while this card is in your Pendulum Zone, you can negate an activated card effect that targets another \"Dinomist\" card (s) you control, then destroy this card.\r\n\r\n----------------------------------------\r\n[ Monster Effect ]\r\nAt the end of the Damage Step, if this card attacked: You can Tribute 1 other \"Dinomist\" monster, then activate 1 of these effects;\r\n● This card can attack an opponent's monster again in a row, also, if it attacks a Defense Position monster, inflict piercing battle damage to your opponent.\r\n● Shuffle 1 card from your opponent's hand (at random) or field into the Deck, then this card gains 100 ATK.",
    "race": "Machine",
    ...
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Error Internal Server Error"
}
```
---
### GET /decks

> Get all decks in the database


_Request Header_
```
{
  "access_token": "TOKEN"
}
```

_Request Body_
```
```

_Response (200)_
```
[{
    "id": 1,
    "name": "<deck title>",
    "total": "<deck content>",
    "deckCode": "<deck code>",
    "qrCode": "<deck qrCode>",
    "UserId": "<deck user owner>",
    "totalPrice: "<deck price>",
    "createdAt": "2021-06-07T13:20:28.746Z",
    "updatedAt": "2021-06-07T13:20:28.746Z"
},{

}
]
```
_Response (401 - Error not found)_
```
{
  "message": "Please register or login first"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Error Internal Server Error"
}
```
---
### POST /decks

> post new deck in the database


_Request Header_
```
{
  "access_token": "TOKEN"
}
```

_Request Body_
```
{
    name: <deck name>, 
    total: <deck total>, 
    deckCode: <deck deckCode>, 
    qrCode: <deck qrCode>, 
    totalPrice: <deck totalPrice>
}
```

_Response (200)_
```
{
    name: <deck name>, 
    total: <deck total>, 
    deckCode: <deck deckCode>, 
    qrCode: <deck qrCode>, 
    totalPrice: <deck totalPrice>
}
```
_Response (401 - Error not found)_
```
{
  "message": "Please register or login first"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Error Internal Server Error"
}
```
---

### GET /decks/:deckId

> Update news that matched newsId params

_URL Params_

```
decksId=[integer]
```

_Request Header_
```
{
  "access_token" = "TOKEN"
  }
```

_Request Body_
```
{
    "title": "<news title>",
    "content": "<news content>",
    "imgUrl": "<news imgUrl>",
    "categoryId": 1
}
```

_Response (200)_
```
{
    "id": 1,
    "title": "<news title>",
    "content": "<news content>",
    "imgUrl": "<news imgUrl>",
    "authorId": 1,
    "categoryId": 1
}
```
_Response (400 - Invalid Input)_
```
{
  "message": "Invalid input"
}
```

_Response (403 - Forbidden)_
```
{
  "message": "Error Forbidden"
}
```
_Response (404 - Error not found)_
```
{
  "message": "Error not found"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Error Internal Server Error"
}
```
---
### PUT /decks/:deckId

> Update decks that match deckId

_URL Params_

```
decksId=[integer]
```

_Request Header_
```
{
  "access_token" = "TOKEN"
}
```

_Request Body_
```
{name, total, deckCode, qrCode, totalPrice}
```

_Response (200)_
```
{name, total, deckCode, qrCode, totalPrice}
```
_Response (400 - Invalid Input)_
```
{
  "message": "Invalid input"
}
```
---
_Response (500 - Internal Server Error)_
```
{
  "message": "Error Internal Server Error"
}
```
---
### DELETE /decks/:deckId

> Delete decks that matched deckId

_URL Params_

Required:
```
deckId=[integer]
```

_Request Header_
```
{
  "access_token" = "TOKEN'
}
```

_Request Body_
```
```

_Response (200)_
```
{
  "message": "Deck successfully deleted"
}
```

_Response (403 - Forbidden)_
```
{
  "message": "Error Forbidden"
}
```

_Response (404 - Error not found)_
```
{
  "message": "Error not found"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Error Internal Server Error"
}
```

---
### PATCH /news/:newsId

> Change news status that matched newsId params

_URL Params_

Required:
```
newsId=[integer]
```

_Request Header_
```
{
  "access_token" = "TOKEN'
}
```

_Request Body_
```
{
  status: "New Status"
}
```

_Response (200)_
```
{
  "message": "Status has been changed"
}
```

_Response (403 - Forbidden)_
```
{
  "message": "Error Forbidden"
}
```

_Response (404 - Error not found)_
```
{
  "message": "Error not found"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Error Internal Server Error"
}
```

---
### GET /news/history

> Show all history

_URL Params_

Required:
```
```

_Request Header_
```
{
  "access_token" = "TOKEN'
}
```

_Request Body_
```
```

_Response (200)_
```
{
  "message": "Status has been changed"
}
```

_Response (403 - Forbidden)_
```
{
  "message": "Error Forbidden"
}
```

_Response (404 - Error not found)_
```
{
  "message": "Error not found"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Error Internal Server Error"
}
```
---