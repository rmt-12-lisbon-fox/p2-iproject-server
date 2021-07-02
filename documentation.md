# Dyandta Zoe App Server
Dyandta Zoe App is an application to deliver interior design for your needs. This app has : 
* RESTful endpoint for design's CRUD operation
* RESTful endpoint for category's READ operation
* RESTful endpoint for register and login operation
* RESTful endpoint for bookmark's CRD operation
* RESTful endpoint for sending messages operation
* JSON formatted response

&nbsp;

### POST /register/designer

> Post register designer

_Request Header_
```
not needed
```
_Request Params_
```
not needed
```
_Request Body_
```
{
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: 'Designer',
    phoneNumber: req.body.phoneNumber,
    address: req.body.address
}
```
_Response (201)_
```
{
    id: result.id,
    username: result.username,
    email: result.email
}
```
_Response (400 - Bad Requests)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
_Response (500 - Internal Server Error)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
---
### POST /register/customer

> Post register customer

_Request Header_
```
not needed
```
_Request Params_
```
not needed
```
_Request Body_
```
{
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: 'Customer',
    phoneNumber: req.body.phoneNumber,
    address: req.body.address
}
```
_Response (201)_
```
{
    id: result.id,
    username: result.username,
    email: result.email
}
```
_Response (400 - Bad Requests)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
_Response (500 - Internal Server Error)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
---
### POST /login

> Login to an existing account

_Request Header_
```
not needed
```
_Request Params_
```
not needed
```
_Request Body_
```
{
    "email": "<string>",
    "password": "<string>"
}
```
_Response (200)_
```
{
  "access_token": "<your access token>",
  "role": "<your role>",
  "username": "<your username>"
}
```
_Response (401 - Unauthorized)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
_Response (500 - Internal Server Error)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
---
### GET /category

> Get all category

_Request Header_
```
not needed
```
_Request Params_
```
not needed
```
_Request Body_
```
not needed
```
_Response (200)_
```
result
```
_Response (500 - Internal Server Error)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
---
### GET /bookmark

> Get all bookmark

_Request Header_
```
{
    "access_token": "<your access token>"
}
```
_Request Params_
```
not needed
```
_Request Body_
```
{
    UsersId: req.user.id
}
```
_Response (200)_
```
result
```
_Response (500 - Internal Server Error)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
---
### POST /bookmark

> Add bookmark

_Request Header_
```
{
    "access_token": "<your access token>"
}
```
_Request Params_
```
not needed
```
_Request Body_
```
{
    DesignId: req.body.DesignId,
    UsersId: req.user.id
}
```
_Response (200)_
```
{
    "message": "Added to your wishlist", 
}
```
_Response (400 - Bad Requests)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
---
### DELETE /bookmark/:DesignId

> Delete a bookmark

_Request Header_
```
{
    "access_token": "<your access token>"
}
```
_Request Params_
```
req.params.DesignId
```
_Request Body_
```
not needed
```
_Response (200)_
```
{
    "message": "Delete Success", 
}
```
_Response (404 - Not Found)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
_Response (500 - Internal Server Error)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
---
### GET /

> Get all designs

_Request Header_
```
not needed
```
_Request Query_
```
needed
```
_Request Params_
```
not needed
```
_Request Body_
```
not needed
```
_Response (200)_
```
result
```
_Response (500 - Internal Server Error)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
---
### GET /:id

> Get only one design

_Request Header_
```
not needed
```
_Request Query_
```
not needed
```
_Request Params_
```
req.params.id
```
_Request Body_
```
not needed
```
_Response (200)_
```
result
```
_Response (404 - Not Found)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
_Response (500 - Internal Server Error)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
---
### GET /designer/myDesign

> Get only one design

_Request Header_
```
{
    "access_token": "<your access token>"
}
```
_Request Query_
```
not needed
```
_Request Params_
```
not needed
```
_Request Body_
```
req.user.id
```
_Response (200)_
```
result
```
_Response (404 - Not Found)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
_Response (500 - Internal Server Error)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
---
### POST /

> Add a design

_Request Header_
```
{
    "access_token": "<your access token>"
}
```
_Request Query_
```
not needed
```
_Request Params_
```
not needed
```
_Request Body_
```
{
    name: req.body.name,
    description: req.body.description,
    image1: req.image,
    image2: req.image,
    image3: req.image,
    UsersId: req.user.id,
    CategoriesId: req.body.CategoriesId
}
```
_Response (201)_
```
result
```
_Response (400 - Bad Requests)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
_Response (500 - Internal Server Error)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
---
### POST /sendEmail

> Send an email

_Request Header_
```
{
    "access_token": "<your access token>"
}
```
_Request Query_
```
not needed
```
_Request Params_
```
not needed
```
_Request Body_
```
{
    to: req.body.to,
    subject: req.body.subject,
    content: req.body.content
}
```
_Response (200)_
```
{
    message: "Email sent!"
}
```
_Response (500 - Internal Server Error)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
---
### POST /sendSms

> Send an SMS

_Request Header_
```
{
    "access_token": "<your access token>"
}
```
_Request Query_
```
not needed
```
_Request Params_
```
not needed
```
_Request Body_
```
{
    "body": req.body.content
}
```
_Response (200)_
```
{
    message: "Message sent!"
}
```
_Response (500 - Internal Server Error)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
---
### DELETE /:id

> Delete a design

_Request Header_
```
{
    "access_token": "<your access token>"
}
```
_Request Query_
```
not needed
```
_Request Params_
```
req.params.id
```
_Request Body_
```
not needed
```
_Response (200)_
```
{
    message: "Delete Success"
}
```
_Response (404 - Not Found)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
_Response (500 - Internal Server Error)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
---
### PUT /:id

> Edit a design

_Request Header_
```
{
    "access_token": "<your access token>"
}
```
_Request Query_
```
not needed
```
_Request Params_
```
req.params.id
```
_Request Body_
```
{
    "name": req.body.name,
    "description": req.body.description,
    "image1": req.body.image1,
    "image2": req.body.image2,
    "image3": req.body.image3,
    "UsersId": req.user.id,
    "CategoriesId": req.body.CategoriesId
}
```
_Response (200)_
```
{
    message: "Design Updated"
}
```
_Response (400 - Bad Requests)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
_Response (500 - Internal Server Error)_
```
{
    "code": "<error code>"
    "message": "<error messages>"
}
```
