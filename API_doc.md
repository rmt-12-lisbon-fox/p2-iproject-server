# Ketawa-In Server
Ketawa-In is an application to share your comedy references to others. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## RESTful endpoints
### POST /register

> Register for user

_Request Header_
```
not needed
```

_Request Body_
```
{
  "email": "<email to register>",
  "password": "<password to register>"
}
```

_Response (201 - Created)_
```
{
  "id": "<user registered id>"
  "email": "<user registered email>",
  "password": "<user registered password>",
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}

```

_Response (400 - Bad Request)_
```
[
  "Email is required",
  "Email cannot be empty",
  "Should be in email format",
  "Password is required",
  "Password cannot be empty"
]
```
---
### GET /login

> User login

_Request Header_
```
not needed
```

_Request Body_
```
{
  "email": "<email to register>",
  "password": "<password to register>"
}
```

_Response (200 - OK)_
```
{
  "access_token": "<user access token>" 
}
```

_Response (401 - Unauthorized)_
```
{
  "message": "Invalid email/password"
}
```
---
### GET /comedians

> Get all comedians

_Request Header_
```
{
  "access_token": "<user access token>" 
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
[
  {
    "id": "<comedians id>",
    "name": "<comedians name>",
    "country": "<comedians country>",
    "imgUrl": "<comedians image url>",
    "ytUrl": "<comedians youtube url>",
    "birthDate": "<comedians birth date>",
    "createdAt": "2021-06-29T06:28:05.391Z",
    "updatedAt": "2021-06-29T06:28:05.391Z"
  }
]
```
---
### GET /comedians/:id

> Get comedian by id

_Request Header_
```
{
  "access_token": "<user access token>" 
}
```

_Request Param_
```
{
  "id": "<comedian id>" 
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
{
  "id": "<comedians id>",
  "name": "<comedians name>",
  "country": "<comedians country>",
  "imgUrl": "<comedians image url>",
  "ytUrl": "<comedians youtube url>",
  "birthDate": "<comedians birth date>",
  "createdAt": "2021-06-29T06:28:05.391Z",
  "updatedAt": "2021-06-29T06:28:05.391Z"
}
```
---
### POST /comedians

> Create comedian

_Request Header_
```
{
  "access_token": "<user access token>" 
}
```

_Request Body_
```
{
  "id": "<comedian id>",
  "name": "<comedian name>",
  "country": "<comedian country>",
  "imgUrl": "<comedian image url>",
  "ytUrl": "<comedian youtube url>",
  "birthDate": "<comedian birth date>"
}
```

_Response (201 - Created)_
```
{
  "id": "<comedian id>",
  "name": "<comedian name>",
  "country": "<comedian country>",
  "imgUrl": "<comedian image url>",
  "ytUrl": "<comedian youtube url>",
  "birthDate": "<comedian birth date>",
  "createdAt": "2021-06-29T06:28:05.391Z",
  "updatedAt": "2021-06-29T06:28:05.391Z"
}
```
---
### GET /favorites

> Get all favorites

_Request Header_
```
{
  "access_token": "<user access token>" 
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
[
  {
    "id": "<favorite id>",
    "UserId": "<user id>",
    "ComedianId": "<comedian id>",
    "createdAt": "2021-06-29T06:28:05.391Z",
    "updatedAt": "2021-06-29T06:28:05.391Z"
  }
]
```
---
### POST /favorites

> Create favorite

_Request Header_
```
{
  "access_token": "<user access token>" 
}
```

_Request User_
```
{
  "id": "<user id>"
}
```

_Request Body_
```
{
  "id": "<favorite id>",
  "UserId": "<user id>",
  "ComedianId": "<comedian id>"
}
```

_Response (201 - Created)_
```
{
  "message": "<comedian name added to favorites>"
}
```
---
### GET /jokes

> Get random jokes

_Request Header_
```
{
  "access_token": "<user access token>",
  "x-rapidapi-key": "<x rapid api key>",
  "x-rapidapi-host": "<x rapid api host>"
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
{
  "setup": "<jokes setup>",
  "punchline": "<jokes punchline>"
}
```
---
### GET /location

> Get network geo location

_Request Header_
```
{
  "access_token": "<user access token>",
  "x-rapidapi-key": "<x rapid api key>",
  "x-rapidapi-host": "<x rapid api host>"
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
{
  "country": "<location country>",
  "capital": "<location capital>"
}
```
---