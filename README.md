

# Healing Server
This app can help you heal your life

&nbsp;

## RESTful endpoints

### POST /register

> Registration User

_Request Header_
```
not needed
```

_Request Body_
```
{
  "firstName": "<firstName input>",
  "lastName": "<lastName input>",
  "email": "<email input>",
  "password": "<password input>"
}
```

_Response (201)_
```
{
  "id": "<given by system>",
  "email": "<posted email>",
}
```

_Response (400)_
```
{
    "message": "E-mail already registered"
}
```

_Response (400)_
```
[
    "First Name cannot empty",
    "Last Name cannot empty",
    "Email cannot empty",
    "Email is required",
    "Password cannot empty",
    "Must email format",
    "Password minimum 5 characters",
    "Password is required"
]
```

### POST /login

> Login User

_Request Header_
```
not needed
```

_Request Body_
```
{
  "email": "<email input>",
  "password": "<password input>"
}
```

_Response (200)_
```
{
  "access_token": <your access token>,
  "id": <your account id>,
  "firstName": <your account firstName>,
  "lastName": <your account lastName>
}
```

_Response (401)_
```
{
    "message": "Wrong email or password"
}
```

### GET /communities

> Get data of all community

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
Not Needed
```

_Response (200)_
```
[{
  "id": "<given by system>,
  "name": "Relationship Advice",
  "imageUrl": "https://cdn.dribbble.com/users/1626229/screenshots/6240403/love_affairs.jpg",
  "description": "Helping you solve relationship problems, even when it feels hopeless. Or you can just share your relationship"
}, {
  "id": "<given by system>,
  "name": "Positive Thinking",
  "imageUrl": "https://cdn.dribbble.com/users/56024/screenshots/14220352/media/684762b398c3b8d554f2a2946e4fd768.jpg",
  "description": "Discuss about how to be a positive thihnking, talk about any positive thing"
}]
```

### POST /mycommunity/:id

> add community to my community

_Params_
```
  id: <community id>
```

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
Not Needed
```

_Response (200)_
```
{
  "message": "Success join",
  "UserId": "<Active User>",
  "CommunityId: "<Community you added>"
}
```

### GET /mycommunity

> get all community where active user join

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
Not Needed
```

_Response (200)_
```
[
    {
        "id": 3,
        "firstName": "Aulia",
        "lastName": "Nadia",
        "email": "aulia@gmail.com",
        "password": "$2a$10$v5eKV8wzVyzNrdKVJxuGK.yxWUpMMrsSbdZdHF6W4okcpjzCLVpWO",
        "createdAt": "2021-06-29T16:39:32.547Z",
        "updatedAt": "2021-06-29T16:39:32.547Z",
        "Communities": [
            {
                "id": 3,
                "name": "Getting Motivated",
                "imageUrl": "https://cdn.dribbble.com/users/467606/screenshots/11128832/media/d9ed1da47c91ac31a8db63167fd8a2f5.jpg",
                "description": "Share Anything to help you getting motivated ",
                "createdAt": "2021-06-29T09:29:33.183Z",
                "updatedAt": "2021-06-29T09:29:33.183Z",
                "MyCommunity": {
                    "UserId": 3,
                    "CommunityId": 3,
                    "createdAt": "2021-06-29T16:40:20.163Z",
                    "updatedAt": "2021-06-29T16:40:20.163Z"
                }
            },
            {
                "id": 5,
                "name": "Anxiety",
                "imageUrl": "https://cdn.dribbble.com/users/26059/screenshots/5613354/gt_06-b_strangers_w.jpg",
                "description": "A safe community for people who dealing with Anxiety",
                "createdAt": "2021-06-29T09:29:33.183Z",
                "updatedAt": "2021-06-29T09:29:33.183Z",
                "MyCommunity": {
                    "UserId": 3,
                    "CommunityId": 5,
                    "createdAt": "2021-06-29T16:41:43.855Z",
                    "updatedAt": "2021-06-29T16:41:43.855Z"
                }
            },
            {
                "id": 1,
                "name": "Relationship Advice",
                "imageUrl": "https://cdn.dribbble.com/users/1626229/screenshots/6240403/love_affairs.jpg",
                "description": "Helping you solve relationship problems, even when it feels hopeless. Or you can just share your relationship",
                "createdAt": "2021-06-29T09:29:33.183Z",
                "updatedAt": "2021-06-29T09:29:33.183Z",
                "MyCommunity": {
                    "UserId": 3,
                    "CommunityId": 1,
                    "createdAt": "2021-06-30T15:50:46.796Z",
                    "updatedAt": "2021-06-30T15:50:46.796Z"
                }
            },
            {
                "id": 6,
                "name": "Passion",
                "imageUrl": "https://cdn.dribbble.com/users/2417352/screenshots/14983340/media/93c52ac43b0a0075bee1b32e74d86332.png",
                "description": "Discuss about passion, how to know your passion",
                "createdAt": "2021-06-29T09:29:33.183Z",
                "updatedAt": "2021-06-29T09:29:33.183Z",
                "MyCommunity": {
                    "UserId": 3,
                    "CommunityId": 6,
                    "createdAt": "2021-06-30T18:32:11.935Z",
                    "updatedAt": "2021-06-30T18:32:11.935Z"
                }
            }
        ]
    }
]
```


