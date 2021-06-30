# iproject-server
API server for Individual Project
> Aniplay -- Anime Streaming Website
&nbsp;

&nbsp;

## _RESTful endpoints_
## <b>Users</b>

### POST /register

> Create new user

_Request Header_
```js
not needed 
```

_Request Body_
```js
{
    "username": "<string>",
    "email": "<string>",
    "password": "<string>",
    "phoneNumber": "<string>",
    "address": "<string>"
}
```

_Response (201 - Created)_
```js
{
    "id": "<given id by system>",
    "email": "<posted email>",
    "role": "admin",
}
```

_Response (400 - Bad Request)_
```js
{
    "code": 400,
    "message": [
        "email must be unique"
    ]
}
```
