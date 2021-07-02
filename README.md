# iproject-server
API server for Individual Project

# p2-cms-customer-server
API for cms and customer websites


# My InviteKuy App Server

* RESTfull endpoint for InviteKuy's CRUD operation 
* JSON formaed response

## RESTfull Endpoint outh

### POST register

Response (201)

```
{
    "data": {
                "id": 5,
                "fullName": "Fadilah Arifki",
                "username": "fadilaharifki",
                "email": "fadilah@gmail.com",
                "password": "$2a$10$Sg7PXKzR5utLqsK0TPglFeruSlBaqpJxCOkrO9/pq1JWLyFQPDrPm",
                "photo": "https://ik.imagekit.io/prbjdtauk2z/2x3_jwQI0zmihBM1.jpg",
                "role": "customer",
                "phoneNumber": "089500929081238",
                "updatedAt": "2021-06-30T14:04:06.644Z",
                "createdAt": "2021-06-30T14:04:06.644Z"
            }
}
```

Response (500)

```
{message : err.message}
```

### GET deltailJob with id

Request
```
req.params.id
```

Response (200)
```
{
    "data": {
        "id": 31,
        "title": "IT",
        "description": "blablabla",
        "CompanyId": 13,
        "AuthorId": 19,
        "jobType": "Full-Time",
        "status": "active",
        "createdAt": "2021-06-12T08:11:14.830Z",
        "updatedAt": "2021-06-14T07:53:09.306Z"
    }
}
```

Response (404)
```
{message: 'Not found'}
```

Response (500)
```
{message : err.message}
```

### DELETE Job with id

Request
```
req.params.id
```

Response (200)
```
{message: `success to delete`}
```

Respons (500)
```
{message : err.message}
```

### POST Job
Request
```
req.body
```

Response (200)
```
{
    "data": {
        "id": 31,
        "title": "IT",
        "description": "blablabla",
        "CompanyId": 13,
        "AuthorId": 19,
        "jobType": "Full-Time",
        "status": "active",
        "createdAt": "2021-06-12T08:11:14.830Z",
        "updatedAt": "2021-06-14T07:53:09.306Z"
    }
}
```

Response (403)
```
{
    "message": [
        "<field> name can not be empty"
    ]
}
```

Respons (500)
```
{
    "message": [
        "Internal Servet Error"
    ]
}
```

### POST login
Request
```
req.body
```

Response (200)
```
{
    {
    "access_token": "hdhuUHUIHW2UHUHUHUHdwd.HUIGSNJIJIW5DPEFWODJWUDA3IAWDAWDMJjjj.wdqjeowjdewjjiweijejidedeiojweojkJNUHUIHh",
    "email": "fadil@mail.com",
    "id": 3,
    "username": "fadil"
    }  
}
```

Response (401)
```
{
    "code": 401,
    "message": "Wrong Email/Password"
}
```

Respons (500)
```
{
    "message": [
        "Internal Servet Error"
    ]
}
```

### POST Google Login

Response (201)
```
{
    {
    "access_token": "hdhuUHUIHW2UHUHUHUHdwd.HUIGSNJIJIW5DPEFWODJWUDA3IAWDAWDMJjjj.wdqjeowjdewjjiweijejidedeiojweojkJNUHUIHh",
    "username": "fadilaharifki",
    }  
}
```

Respons (500)
```
{message : err.message}
```

## RESTfull Endpoint music with 3rdAPI

### POST with id

Response (201)

```
{
    data :{
            "id": 3,
            "title": "Pop All Stars",
            "musicUrl": "playlist/1282483245",
            "updatedAt": "2021-06-30T05:40:46.980Z",
            "createdAt": "2021-06-30T05:40:46.980Z"
        }
}
```

Response (500)

```
{message : err.message}
```

### GET findAll

Request
```
req.params.id
```

Response (200)
```
{
    data : [
            {
                "id": 1,
                "title": "Essential Duets",
                "musicUrl": "playlist/8847611602",
                "createdAt": "2021-06-30T05:37:32.539Z",
                "updatedAt": "2021-06-30T05:37:32.539Z"
            },
            {
                "id": 2,
                "title": "2000s Acoustic Hits",
                "musicUrl": "playlist/8951600962",
                "createdAt": "2021-06-30T05:38:44.376Z",
                "updatedAt": "2021-06-30T05:38:44.376Z"
            },
            {
                "id": 3,
                "title": "Pop All Stars",
                "musicUrl": "playlist/1282483245",
                "createdAt": "2021-06-30T05:40:46.980Z",
                "updatedAt": "2021-06-30T05:40:46.980Z"
            }
        ]
}
```

Response (500)
```
{message : err.message}
```

## RESTfull Endpoint blog

### POST

Response (200)

```
{
    "data": {
        "id": 2,
        "title": "Apa itu Pengertian Marriage dan Penjelasannya!",
        "author": "fadilah arifki",
        "description": "Apa itu Pengertian Marriage dan Penjelasannya! blablablabla ",
        "img": "https://ik.imagekit.io/prbjdtauk2z/marriage_7S1SsHjrD.jpeg",
        "updatedAt": "2021-06-30T14:35:37.512Z",
        "createdAt": "2021-06-30T14:35:37.512Z"
    }
}
```

Response (500)

```
{message : err.message}
```

### GET showBlog All

Response (200)
```
{
    data : [
                {
                    "id": 1,
                    "title": "Apa itu Pengertian Marriage dan Penjelasannya!",
                    "author": "fadilah arifki",
                    "description": "Apa itu Pengertian Marriage dan Penjelasannya! blablablabla ",
                    "img": "https://ik.imagekit.io/prbjdtauk2z/marriage_Nxj6DfvzVdHO.jpeg",
                    "createdAt": "2021-06-29T05:11:39.076Z",
                    "updatedAt": "2021-06-29T05:11:39.076Z"
                },
                {
                    "id": 2,
                    "title": "Apa itu Pengertian Marriage dan Penjelasannya!",
                    "author": "fadilah arifki",
                    "description": "Apa itu Pengertian Marriage dan Penjelasannya! blablablabla ",
                    "img": "https://ik.imagekit.io/prbjdtauk2z/marriage_7S1SsHjrD.jpeg",
                    "createdAt": "2021-06-30T14:35:37.512Z",
                    "updatedAt": "2021-06-30T14:35:37.512Z"
                }
            ]
}
```

Response (404)
```
{message: 'Not found'}
```

Response (500)
```
{message : err.message}
```

### GET Blog with id

Request
```
req.params.id
```

Response (200)
```
{
    "data": {
        "id": 1,
        "title": "Apa itu Pengertian Marriage dan Penjelasannya!",
        "author": "fadilah arifki",
        "description": "Apa itu Pengertian Marriage dan Penjelasannya! blablablabla ",
        "img": "https://ik.imagekit.io/prbjdtauk2z/marriage_Nxj6DfvzVdHO.jpeg",
        "createdAt": "2021-06-29T05:11:39.076Z",
        "updatedAt": "2021-06-29T05:11:39.076Z"
    }
}
```

Respons (500)
```
{message : err.message}
```

## RESTfull Endpoint invites

### GET findAll

Response (200)

```
{
    "data": [
        {
            "id": 4,
            "nameMale": "Dimas",
            "nameFemale": "Sela",
            "loveStory": "enjwwewwdbodwowdiowd",
            "dateAkad": "2021-06-17T00:00:00.000Z",
            "addressAkad": "Lampung",
            "dateReception": "2021-06-17T00:00:00.000Z",
            "addressReception": "Lampung",
            "UserId": 3,
            "TamplateId": 1,
            "createdAt": "2021-06-30T06:00:48.425Z",
            "updatedAt": "2021-06-30T12:27:37.517Z",
            "User": {
                "id": 3,
                "fullName": "fadil",
                "username": "fadil",
                "email": "fadil@mail.com",
                "password": "$2a$10$MA.c5iKe0Q3r51a.vLXZfeRnL3dgZZbw5awXP.PwgrsHlUV7rcfqi",
                "photo": "https://ik.imagekit.io/prbjdtauk2z/2x3_Uz7RcFAo4ucG.jpg",
                "role": "customer",
                "phoneNumber": "0809230193290",
                "createdAt": "2021-06-29T15:38:33.009Z",
                "updatedAt": "2021-06-29T15:38:33.009Z"
            },
            "Tamplate": {
                "id": 1,
                "version": "flower",
                "imgT": "https://ik.imagekit.io/prbjdtauk2z/template-01_6iqZU1ZZ1H3eh.png",
                "imgL": "https://ik.imagekit.io/prbjdtauk2z/template-04_Mr-dLLhuh.png\n",
                "imgR": "https://ik.imagekit.io/prbjdtauk2z/template-03_dren3Cyi9.png",
                "imgB": "https://ik.imagekit.io/prbjdtauk2z/template-02_AYTCFVcIUw05.png",
                "createdAt": "1997-06-28T17:00:00.000Z",
                "updatedAt": "1997-06-28T17:00:00.000Z"
            }
        }
    ]
}
```

Response (500)

```
{message : err.message}
```

### POST

Response (201)
```
{
    "data": [
        {
            "id": 4,
            "nameMale": "Dimas",
            "nameFemale": "Sela",
            "loveStory": "enjwwewwdbodwowdiowd",
            "dateAkad": "2021-06-17T00:00:00.000Z",
            "addressAkad": "Lampung",
            "dateReception": "2021-06-17T00:00:00.000Z",
            "addressReception": "Lampung",
            "UserId": 3,
            "TamplateId": 1,
            "createdAt": "2021-06-30T06:00:48.425Z",
            "updatedAt": "2021-06-30T12:27:37.517Z",
        }
    ]
}
```

Response (500)
```
{message : err.message}
```

### GET invites with id

Request
```
req.params.id
```

Response (200)
```
{{
    "data": [
        {
            "id": 4,
            "nameMale": "Dimas",
            "nameFemale": "Sela",
            "loveStory": "enjwwewwdbodwowdiowd",
            "dateAkad": "2021-06-17T00:00:00.000Z",
            "addressAkad": "Lampung",
            "dateReception": "2021-06-17T00:00:00.000Z",
            "addressReception": "Lampung",
            "UserId": 3,
            "TamplateId": 1,
            "createdAt": "2021-06-30T06:00:48.425Z",
            "updatedAt": "2021-06-30T12:27:37.517Z",
            "User": {
                "id": 3,
                "fullName": "fadil",
                "username": "fadil",
                "email": "fadil@mail.com",
                "password": "$2a$10$MA.c5iKe0Q3r51a.vLXZfeRnL3dgZZbw5awXP.PwgrsHlUV7rcfqi",
                "photo": "https://ik.imagekit.io/prbjdtauk2z/2x3_Uz7RcFAo4ucG.jpg",
                "role": "customer",
                "phoneNumber": "0809230193290",
                "createdAt": "2021-06-29T15:38:33.009Z",
                "updatedAt": "2021-06-29T15:38:33.009Z"
            },
            "Tamplate": {
                "id": 1,
                "version": "flower",
                "imgT": "https://ik.imagekit.io/prbjdtauk2z/template-01_6iqZU1ZZ1H3eh.png",
                "imgL": "https://ik.imagekit.io/prbjdtauk2z/template-04_Mr-dLLhuh.png\n",
                "imgR": "https://ik.imagekit.io/prbjdtauk2z/template-03_dren3Cyi9.png",
                "imgB": "https://ik.imagekit.io/prbjdtauk2z/template-02_AYTCFVcIUw05.png",
                "createdAt": "1997-06-28T17:00:00.000Z",
                "updatedAt": "1997-06-28T17:00:00.000Z"
            }
        }
    ]
}
```

Respons (404)
```
{message : 'Not Found'}
```

Respons (500)
```
{message : err.message}
```

### PUT

Response (201)
```
{
    "data": [
        {
            "id": 4,
            "nameMale": "Dimas",
            "nameFemale": "Sela",
            "loveStory": "enjwwewwdbodwowdiowd",
            "dateAkad": "2021-06-17T00:00:00.000Z",
            "addressAkad": "Lampung",
            "dateReception": "2021-06-17T00:00:00.000Z",
            "addressReception": "Lampung",
            "UserId": 3,
            "TamplateId": 1,
            "createdAt": "2021-06-30T06:00:48.425Z",
            "updatedAt": "2021-06-30T12:27:37.517Z",
        }
    ]
}
```

Response (500)
```
{message : err.message}
```

### POST generate Link

Response (201)
```
{
    "url": "https://bit.ly/3h8DaoS"
}
```

Response (500)
```
{
    "code": 500,
    "message": "INVALID_ARG_LONG_URL"
}
```

