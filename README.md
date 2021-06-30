# iproject-server
API server for Individual Project

# API-DOC

## POST /register
### header
no need

### body
{
    "email": "test@gmail.com",
    "password": "password",
    "name": "test",
    "imageUrl": "https://ik.imagekit.io/exzhcwglcvz/default-image.jpg",
    "phoneNumber": "",
    "address": ""
}

#### required parameters
email, password and name

### Response
#### 400 - is empty
{
    message: '<field> should not be empty'
}

#### 400 - email must be unique
{
    message: 'Email has been taken'
}

#### 400 - email must be in email format
{
    message: 'Email should be in email format'
}

#### 400 - You should add profile picture'
{
    message: 'You should add profile picture'
}

#### 400 - Your image file is larger than 255 KB'
{
    message: 'Your image file is larger than 255 KB'
}

### 201 - success
{
    "id": 1,
    "email": "bramadiputra15@gmail.com"
}

## POST /login
### header
no need

### body
{
    "email": "test@gmail.com",
    "password": "password",
}

#### required parameters
email and password

### Response
#### 400 - invalid email/password
{
    message: 'Invalid email/password'
}

### 200 - success
{
    "access_token": <JWT_TOKEN>
}

---USER

## GET /users
### header
{
    "access_token": <JWT_TOKEN>
}

### body
no body

### Response
#### 404 - not found
{
    message: 'not found'
}

### 200 - success
{
    "imageUrl": "https://ik.imagekit.io/exzhcwglcvz/Abraham_Adiputra_Wijaya_wHIEDgpGcsGC",
    "email": "bram@gmail.com",
    "name": "Abraham Adiputra Wijaya",
    "address": "",
    "phoneNumber": ""
}

## PUT /users
### header
{
    "access_token": <JWT_TOKEN>
}

### body
{
    "email": "bram@gmail.com",
    "name": "Abraham A W",
    "imageUrl": "https://ik.imagekit.io/exzhcwglcvz/default-image.jpg",
    "phoneNumber": "",
    "address": ""
}

### Response
#### 400 - is empty
{
    message: '<field> should not be empty'
}

#### 400 - email must be unique
{
    message: 'Email has been taken'
}

#### 400 - email must be in email format
{
    message: 'Email should be in email format'
}

#### 400 - You should add profile picture'
{
    message: 'You should add profile picture'
}

#### 400 - Your image file is larger than 255 KB'
{
    message: 'Your image file is larger than 255 KB'
}

### 200 - success
{
    "message": "Update is successfull"
}

---Films

## GET /films
### header
{
    "access_token": <JWT_TOKEN>
}

### body
no body

### Response
### 200 - success
{
    "data": [
        {
            "id": 72302,
            "title": "Run.Catch.Love",
            "img": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdV6nkLA478r0_LaMInHC_2p8a_mdVomgPFmYhhDkG3BIB6Dk1EnnCpklcdYcQqlddoeUCEG2T7CS7RsSHi6lpX0zQ.jpg?r=544",
            "vtype": "movie",
            "nfid": 81424919,
            "synopsis": "After an Austrian aristocrat flees from his own wedding, he meets a girl who also has second thoughts about getting married.",
            "avgrating": 0,
            "year": 2016,
            "runtime": 4738,
            "imdbid": null,
            "poster": null,
            "imdbrating": null,
            "top250": null,
            "top250tv": null,
            "clist": "\"RU\":\"Russia\"",
            "titledate": "2021-06-30"
        },
        . . .
    ],
    "currentPage": 1
}

---Review
## POST /reviews
### header
{
    "access_token": <JWT_TOKEN>
}

### body
{
    "title": "Me Too",
    "comment": "Ini Film bagus banget recommended"
}

### Response
#### 400 - is empty
{
    message: '<field> should not be empty'
}

### 201 - success
{
    "id": 1
}

## GET /reviews
### header
{
    "access_token": <JWT_TOKEN>
}

### body
no body

### Response
### 200 - success
{
    "count": 2,
    "rows": [
        {
            "id": 4,
            "UserId": 8,
            "title": "Seven Women",
            "comment": "Ini ceritanya cukup aneh. Tentang 7 cewek gitu, tapi boleh juga lah",
            "createdAt": "2021-06-30T16:01:13.888Z",
            "updatedAt": "2021-06-30T16:01:29.349Z",
            "User": {
                "imageUrl": "https://ik.imagekit.io/exzhcwglcvz/profile_SzKbTlA5h.jpeg",
                "email": "admin@gmail.com"
            }
        },
        . . .
    ]
}

## GET /reviews/findByUserId
### header
{
    "access_token": <JWT_TOKEN>
}

### body
no body

### Response
#### 404 - not found
{
    message: 'not found'
}

### 200 - success
[
    {
        "id": 3,
        "UserId": 5,
        "title": "An American Pickle",
        "comment": "Ini filmnya menegangkan gitu.",
        "createdAt": "2021-06-30T14:19:34.100Z",
        "updatedAt": "2021-06-30T15:58:43.433Z",
        "User": {
            "imageUrl": "https://ik.imagekit.io/exzhcwglcvz/me_nPPl5oMO84XA.jpeg",
            "email": "bramadiputra15@gmail.com"
        }
    }
]

## GET reviews/:id
### header
{
    "access_token": <JWT_TOKEN>
}

### body
no body

### Response
#### 404 - not found
{
    message: 'not found'
}

### 200 - success
{
    "id": 3,
    "UserId": 5,
    "title": "An American Pickle",
    "comment": "Ini filmnya menegangkan gitu.",
    "createdAt": "2021-06-30T14:19:34.100Z",
    "updatedAt": "2021-06-30T15:58:43.433Z"
}

## PUT /reviews/:id
### header
{
    "access_token": <JWT_TOKEN>
}

### body
{
    "comment": "Ini Film bagus banget recommended"
}

### Response
#### 404 - not found
{
    message: 'not found'
}

#### 400 - is empty
{
    message: '<field> should not be empty'
}

### 200 - success
{
    "message": "Update is successfull"
}

## DELETE /reviews/:id
### header
{
    "access_token": <JWT_TOKEN>
}

### body
no body

### Response
#### 404 - not found
{
    message: 'not found'
}

### 200 - success
{
    "message": "Delete is successfull"
}

## Global Error
### 401 - You need login first
{
    "message": "You need to login first"
}

### 403 - Unauthorized
{
    "message": "Unauthorized"
}