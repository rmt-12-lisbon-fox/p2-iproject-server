# English Tools

API for english-tools websites.
This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

## RESTful endpoints

---

## Endpoint: /login

### POST /login

> to login

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": "string",
  "password": "string",
}
```

_Response (200)_

```
login and go to home page

{
  "access_token": "string",
  "fullName": "string"
}

```

_Response (400 - Bad request)_

```
{
  "message": "Wrong Email/Password"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

## Endpoint: /register

### POST /register

> to register

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": "string",
  "password": "string",
  "fullName": "string"
}
```

_Response (201)_

```
to login page

{
  "id": 2,
  "email": "bono@mail.com",
  "fullName": "Bono Sejati"
}

```

_Response (400 - Bad request)_

```
{
  "message": ["<error message>"]
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

## Endpoint: /loginGoogle

### POST /loginGoogle

> to login

_Request Header_

```
not needed
```

_Request Body_

```
account google
```

_Response (200)_

```
if the user has registered on the career portal : login and go to the home page
if not : the user registered, login and go to home page

{
  "access_token": "string",
  "fullName": "string"
}

```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

## Endpoint: /challenges

### GET /challenges

> Get all challenges

_Request Header_

```
needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "company": [
    {
      "id": 1,
      "name": "Toyota",
      "companyLogo": "https://www.toyota.astra.co.id/sites/default/files/2019-11/fit-tc-logo.jpeg",
      "location": "Jepang",
      "email": "toyota@mail.com",
      "description": "Perusahaan mobil",
      "createdAt": "2021-06-08T12:03:44.390Z",
      "updatedAt": "2021-06-08T12:03:44.390Z"
    },
    {
      "id": 2,
      "name": "Yamaha",
      "companyLogo": "https://i.pinimg.com/originals/e2/d9/c0/e2d9c066cf0f8addb0f2788627775dd9.jpg",
      "location": "Jepang",
      "email": "yamaha@mail.com",
      "description": "Perusahaan motor",
      "createdAt": "2021-06-08T12:01:50.148Z",
      "updatedAt": "2021-06-08T14:55:42.193Z"
    }
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

### GET /challenges/:id

> Get company by id

_Request Header_

```
needed
```

_Request Params_

```
id needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "company": {
    "id": 1,
    "name": "Toyota",
    "companyLogo": "https://www.toyota.astra.co.id/sites/default/files/2019-11/fit-tc-logo.jpeg",
    "location": "Jepang",
    "email": "toyota2@mail.com",
    "description": "Perusahaan mobil",
    "createdAt": "2021-06-08T12:03:44.390Z",
    "updatedAt": "2021-06-08T12:03:44.390Z"
  }
}

```

_Response (404 - Not Found)_

```
{
    "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### POST /challenges

> Create new company

_Request Header_

```
needed
```

_Request Body_

```
{
  "name": "<name to get insert into>",
  "companyLogo": "<companyLogo to get insert into>",
  "location": "<location to get insert into>",
  "email": "<email to get insert into>",
  "description": "<description to get insert into>",
}
```

_Response (201 - Created)_

```
{
  "id": <given id by system>,
  "name": "<posted name>",
  "companyLogo": "<posted companyLogo>",
  "location": "<posted location>",
  "email": "<posted email>",
  "description": "<posted description>",
  "createdAt": "2020-06-08T07:15:12.149Z",
  "updatedAt": "2020-06-08T07:15:12.149Z",
}
```

_Response (400 - Bad Request)_

```
{
  "message": ["<error message>"]
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---
