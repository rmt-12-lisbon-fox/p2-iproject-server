# p2-cms-customer-server
API for cms and customer websites. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## RESTful endpoints
### GET /movies

> Get all movies

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 12,
        "title": "Doraemon: Nobita's Dinosaur - 2006",
        "synopsis": "Doraemon - Nobita's Dinosaur 2006, also known as Doraemon: The Movie 2006 and Doraemon and the Little Dinosaur, is a traditionally animated feature film which is a remake of the first, 1980, Doraemon film Doraemon: Nobita's Dinosaur.",
        "trailerUrl": "https://www.youtube.com/embed/1udlBviHgzQ",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/doraemon-poster-1.jpg",
        "rating": 5,
        "authorId": 2,
        "genreId": 7,
        "createdAt": "2021-06-10T16:08:17.076Z",
        "updatedAt": "2021-06-11T12:31:17.535Z",
        "User": {
            "id": 2,
            "name": "Ilya Kravtsov",
            "username": "ilyakrav",
            "email": "ik@pouchnation.com",
            "role": "staff",
            "phoneNumber": "081319023264",
            "address": "",
            "createdAt": "2021-06-10T09:47:36.952Z",
            "updatedAt": "2021-06-11T14:57:58.512Z"
        },
        "Genre": {
            "id": 7,
            "name": "Comedy",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 6,
        "title": "Harry Potter",
        "synopsis": "A house-elf warns Harry against returning to Hogwarts, but he decides to ignore it. When students and creatures at the school begin to get petrified, Harry finds himself surrounded in mystery.",
        "trailerUrl": "https://www.youtube.com/embed/VyHV0BRtdxo",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/HP.jpg",
        "rating": 4,
        "authorId": 1,
        "genreId": 9,
        "createdAt": "2021-06-10T11:18:00.805Z",
        "updatedAt": "2021-06-10T15:30:58.974Z",
        "User": {
            "id": 1,
            "name": "Galuh Alifani",
            "username": "galuhalifani",
            "email": "galuh.adika@gmail.com",
            "role": "admin",
            "phoneNumber": null,
            "address": null,
            "createdAt": "2021-06-10T09:44:38.163Z",
            "updatedAt": "2021-06-10T09:44:38.163Z"
        },
        "Genre": {
            "id": 9,
            "name": "Fantasy",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 11,
        "title": "Love Story (1970)",
        "synopsis": "Love Story is a 1970 American romantic drama written by Erich Segal, who was also the author of the best-selling 1970 novel of the same name",
        "trailerUrl": "https://www.youtube.com/embed/JASEIR8hjzk",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/love-story-1970-poster.jfif",
        "rating": 4,
        "authorId": 1,
        "genreId": 5,
        "createdAt": "2021-06-10T15:47:12.235Z",
        "updatedAt": "2021-06-10T15:47:12.235Z",
        "User": {
            "id": 1,
            "name": "Galuh Alifani",
            "username": "galuhalifani",
            "email": "galuh.adika@gmail.com",
            "role": "admin",
            "phoneNumber": null,
            "address": null,
            "createdAt": "2021-06-10T09:44:38.163Z",
            "updatedAt": "2021-06-10T09:44:38.163Z"
        },
        "Genre": {
            "id": 5,
            "name": "Romance",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 19,
        "title": "Narnia Trial",
        "synopsis": "asdasdasd",
        "trailerUrl": "https://www.youtube.com/embed/1udlBviHgzQ",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/0_aCG0bG4Uh4t9-6C-.jpg",
        "rating": 1,
        "authorId": 2,
        "genreId": 5,
        "createdAt": "2021-06-11T12:18:55.726Z",
        "updatedAt": "2021-06-11T12:18:55.726Z",
        "User": {
            "id": 2,
            "name": "Ilya Kravtsov",
            "username": "ilyakrav",
            "email": "ik@pouchnation.com",
            "role": "staff",
            "phoneNumber": "081319023264",
            "address": "",
            "createdAt": "2021-06-10T09:47:36.952Z",
            "updatedAt": "2021-06-11T14:57:58.512Z"
        },
        "Genre": {
            "id": 5,
            "name": "Romance",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 2,
        "title": "Titanic",
        "synopsis": "Titanic is a 1997 American epic romance and disaster film directed, written, co-​produced, and co-edited by James Cameron.",
        "trailerUrl": "https://www.youtube.com/embed/cIJ8ma0kKtY",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/titanic-poster.jpg",
        "rating": 5,
        "authorId": 1,
        "genreId": 5,
        "createdAt": "2021-06-10T09:50:32.119Z",
        "updatedAt": "2021-06-10T15:30:56.826Z",
        "User": {
            "id": 1,
            "name": "Galuh Alifani",
            "username": "galuhalifani",
            "email": "galuh.adika@gmail.com",
            "role": "admin",
            "phoneNumber": null,
            "address": null,
            "createdAt": "2021-06-10T09:44:38.163Z",
            "updatedAt": "2021-06-10T09:44:38.163Z"
        },
        "Genre": {
            "id": 5,
            "name": "Romance",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    }
]
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---


> Get all movies by genre id

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 11,
        "title": "Love Story (1970)",
        "synopsis": "Love Story is a 1970 American romantic drama written by Erich Segal, who was also the author of the best-selling 1970 novel of the same name",
        "trailerUrl": "https://www.youtube.com/embed/JASEIR8hjzk",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/love-story-1970-poster.jfif",
        "rating": 4,
        "authorId": 1,
        "genreId": 5,
        "createdAt": "2021-06-10T15:47:12.235Z",
        "updatedAt": "2021-06-10T15:47:12.235Z",
        "User": {
            "id": 1,
            "name": "Galuh Alifani",
            "username": "galuhalifani",
            "email": "galuh.adika@gmail.com",
            "role": "admin",
            "phoneNumber": null,
            "address": null,
            "createdAt": "2021-06-10T09:44:38.163Z",
            "updatedAt": "2021-06-10T09:44:38.163Z"
        },
        "Genre": {
            "id": 5,
            "name": "Romance",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 19,
        "title": "Narnia Trial",
        "synopsis": "asdasdasd",
        "trailerUrl": "https://www.youtube.com/embed/1udlBviHgzQ",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/0_aCG0bG4Uh4t9-6C-.jpg",
        "rating": 1,
        "authorId": 2,
        "genreId": 5,
        "createdAt": "2021-06-11T12:18:55.726Z",
        "updatedAt": "2021-06-11T12:18:55.726Z",
        "User": {
            "id": 2,
            "name": "Ilya Kravtsov",
            "username": "ilyakrav",
            "email": "ik@pouchnation.com",
            "role": "staff",
            "phoneNumber": "081319023264",
            "address": "",
            "createdAt": "2021-06-10T09:47:36.952Z",
            "updatedAt": "2021-06-11T14:57:58.512Z"
        },
        "Genre": {
            "id": 5,
            "name": "Romance",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    },
    {
        "id": 2,
        "title": "Titanic",
        "synopsis": "Titanic is a 1997 American epic romance and disaster film directed, written, co-​produced, and co-edited by James Cameron.",
        "trailerUrl": "https://www.youtube.com/embed/cIJ8ma0kKtY",
        "imgUrl": "https://ik.imagekit.io/77pzczg37zw/titanic-poster.jpg",
        "rating": 5,
        "authorId": 1,
        "genreId": 5,
        "createdAt": "2021-06-10T09:50:32.119Z",
        "updatedAt": "2021-06-10T15:30:56.826Z",
        "User": {
            "id": 1,
            "name": "Galuh Alifani",
            "username": "galuhalifani",
            "email": "galuh.adika@gmail.com",
            "role": "admin",
            "phoneNumber": null,
            "address": null,
            "createdAt": "2021-06-10T09:44:38.163Z",
            "updatedAt": "2021-06-10T09:44:38.163Z"
        },
        "Genre": {
            "id": 5,
            "name": "Romance",
            "createdAt": "2021-06-10T09:38:12.199Z",
            "updatedAt": "2021-06-10T09:38:12.199Z"
        }
    }
]
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /movies/:id

> Get movies by Id

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "id": 1,
    "title": "Love Story (1970)",
    "synopsis": "Love Story is a 1970 American romantic drama written by Erich Segal, who was also the author of the best-selling 1970 novel of the same name.",
    "trailerUrl": "https://www.youtube.com/watch?v=JASEIR8hjzk",
    "imgUrl": "https://www.flixwatch.co/wp-content/uploads/60020297.jpg",
    "rating": 4,
    "authorId": null,
    "genreId": null,
    "createdAt": "2021-06-07T12:29:22.433Z",
    "updatedAt": "2021-06-07T13:25:08.791Z"
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: movie not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /movies

> Create new movie

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Body_
```
{
    "title": "Titanic (1997)",
    "synopsis": "Titanic is a 1997 American epic romance and disaster film directed, written, co-​produced, and co-edited by James Cameron.",
    "trailerUrl": "https://www.youtube.com/watch?v=cIJ8ma0kKtY",
    "imgUrl": "https://ik.imagekit.io/77pzczg37zw/titanic-poster.jpg",
    "rating": 5
}
```

_Response (201 - Created)_
```
{
    "id": 2,
    "title": "Titanic (1997)",
    "synopsis": "Titanic is a 1997 American epic romance and disaster film directed, written, co-​produced, and co-edited by James Cameron.",
    "trailerUrl": "https://www.youtube.com/watch?v=cIJ8ma0kKtY",
    "imgUrl": "https://ik.imagekit.io/77pzczg37zw/titanic-poster.jpg",
    "rating": 5,
    "createdAt": "2021-06-07T13:13:05.395Z",
    "updatedAt": "2021-06-07T13:13:05.397Z",
    "authorId": null,
    "genreId": null
}
```

_Response (400 - Bad Request)_
```
{
    "error": "Input Error",
    "message": [
        "<validation error message>"
    ]
}
```
```
{
    "error": "Input Error",
    "message": "Only formats .jpg, .jpeg, .png, are allowed, with max. size of 225kB"
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---


> Update movie data

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
{
    "title": "Love Story",
    "synopsis": "Love Story is a 1970 American romantic drama written by Erich Segal, who was also the author of the best-selling 1970 novel of the same name.",
    "trailerUrl": "https://www.youtube.com/watch?v=JASEIR8hjzk",
    "imgUrl": "https://ik.imagekit.io/77pzczg37zw/love-story-1970-poster.jfif",
    "rating": 2
}
```

_Response (200)_
```
{
    "title": "Love Story",
    "synopsis": "Love Story is a 1970 American romantic drama written by Erich Segal, who was also the author of the best-selling 1970 novel of the same name.",
    "trailerUrl": "https://www.youtube.com/watch?v=JASEIR8hjzk",
    "imgUrl": "https://ik.imagekit.io/77pzczg37zw/love-story-1970-poster.jfif",
    "rating": "2",
    "updatedAt": "2021-06-07T13:25:08.785Z"
}
```

_Response (400 - Bad Request)_
```
{
    "error": "Input Error",
    "message": [
        "<validation error message>"
    ]
}
```
```
{
    "error": "Input Error",
    "message": "Only formats .jpg, .jpeg, .png, are allowed, with max. size of 225kB"
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```
```
{
    "error": "Unauthorized",
    "message": "Invalid User / Login Credentials"
}
```

_Response (403 - Forbidden)_
```
{
    "error": "Forbidden Access",
    "message": "User not authorized to access the page / perform action"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: movie not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---


> Delete movie

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "message": "Titanic (1997) successfully deleted"
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```
```
{
    "error": "Unauthorized",
    "message": "Invalid User / Login Credentials"
}
```

_Response (403 - Forbidden)_
```
{
    "error": "Forbidden Access",
    "message": "User not authorized to access the page / perform action"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: movie not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /register

> Register new user (admin)

_Request Header_
```
not needed
```

_Request Body_
```
{
    "first_name": "Ilya",
    "last_name": "Kravtsov",
    "username": "Ilya85",   
    "email": "ik@pouchnation@.com",
    "password": "Kravtsov85",
    "role": "CEO & Founder",
    "phoneNumber": "6287875343066",
    "profilePic: <file_upload>,
    "region": "Southeast Asia",
    "company_name": "PouchNATION",
    "company_website": "https://www.pouchnation.com",
    "company_industry": "Media & Entertainment",
    "team_size": "21-50",
    "linkedin_url": "https://www.linkedin.com/in/ilya-kravtsov-0108124/"
}
```

_Response (201)_
```
{
    "message": "Success registering a new founder",
    "id": 2,
    "first_name": "Ilya",
    "last_name": "Kravtsov",
    "username": "Ilya85",
    "email": "ik@pouchnation.com",
    "role": "CEO & Founder",
    "phoneNumber": "6287875343066",
    "profilePic": "https://ik.imagekit.io/77pzczg37zw/IK.jpg",
    "region": "Southeast Asia",
    "company_name": "PouchNation",
    "company_website": "https://www.pouchnation.com",
    "company_industry": "Media & Entertainment",
    "team_size": "21-50",
    "linkedin_url": "https://www.linkedin.com/in/ilya-kravtsov-0108124/",
    "admin_status": false,
    "active_status": false
}
```

_Response (400 - Bad Request)_
```
{
    "error": "Input Error",
    "message": [
        "<validation error message>"
    ]
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /login

> Login user

_Request Header_
```
not needed
```

_Request Body_
```
{
    "email": "test@aaa.com",
    "password": "password123"
}
```

_Response (200)_
```
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6IlRlc3QiLCJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAYWFhLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyMzQ3Mjg1N30.8utHA631PVg6X-TvvAoYqqhFhhF37XGnkt7-5u_Uej0",
    "name": "Test",
    "role": "admin",
    "id": 7
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Invalid username/password"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /googlelogin

> Login user from Google OAuth

_Request Header_
```
not needed
```

_Request Body_
```
{
  id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhMWQyNmQ5OTJiZTdhNGI2ODliZGNlMTkxMWY0ZTlhZGM3NWQ5ZjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiOTQ4NTI0NzA2NDY2LXNtcDVqNW5tOGc2Mzlxc2d1ZzltN2k2ZWx1Ym1jZGdjLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiOTQ4NTI0NzA2NDY2LXNtcDVqNW5tOGc2Mzlxc2d1ZzltN2k2ZWx1Ym1jZGdjLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0NTAyMzEzNDk1NDczMjU5NDIwIiwiZW1haWwiOiJnYWx1aGFkaWthYWxpZmFuaUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkNYOWVOc1F3MXE1ZDRnbC1PNDRMcEEiLCJuYW1lIjoiQWxpZmFuaSBHLiBBLiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQVRYQUp4RkozaHMwTzB0YVdpeEREaVRMWm5RYTBVenZkQmJ5bG1kSW9ESz1zOTYtYyIsImdpdmVuX25hbWUiOiJBbGlmYW5pIiwiZmFtaWx5X25hbWUiOiJHLiBBLiIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjIzNDczMTc5LCJleHAiOjE2MjM0NzY3NzksImp0aSI6IjMzMjFmMGUyZThhNDlhOGM3NTdiZWUwMTE2Mjk5NTRhYWRlYTQ3NjUifQ.CCTMDk38O-zNkOWQvnZDOCs_xxlfRJJHNHACB5FfB18APd1gCxrm6teHyH6YgLnei69IWvj5cp0n509yGNhAyCwYZKgZMhzxyJk_-l3FgEIzOJdqqxG1KMKutzoJC7ks-nHl_SPpnPlBjxn4L1lTCEC0jGkiWLHdpn8pZBiBvOrhbr9S7kkK19wVEVO_tyVGSZ_TOK6oiw0ldm1ePpw8qSYtKHT2nEbpVXrAfDr5IIyUWPmpDo5aTKfkCRgG0qjaUGs6SdostOcvHt9KBjlD7GztruSNDKGz5D-nPQQBjpRYd46mR1VHYwBjhS565RapaE-BPntihJasasdasdasdasdasd'
}
```

_Response (200)_
```
{
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6IkFsaWZhbmkgRy4gQS4iLCJ1c2VybmFtZSI6ImdhbHVoYWRpa2FhbGlmYW5pQGdtYWlsLmNvbSIsImVtYWlsIjoiZ2FsdWhhZGlrYWFsaWZhbmlAZ21haWwuY29tIiwicm9sZSI6InN0YWZmIiwiaWF0IjoxNjIzNDczMzIxfQ.BpzPHMHcRcaIJL1FLwZEdVg_fasdasdasdasdasdasdasdasd',
  name: 'Alifani G. A.',
  role: 'staff',
  id: 6
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /users/:id

> Get user by id

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "id": 2,
    "name": "Ilya Kravtsov",
    "username": "ilyakrav",
    "email": "ik@pouchnation.com",
    "role": "staff",
    "phoneNumber": "081319023264",
    "address": "",
    "Movies": [
        {
            "id": 19,
            "title": "Narnia Trial",
            "synopsis": "asdasdasd",
            "trailerUrl": "https://www.youtube.com/embed/1udlBviHgzQ",
            "imgUrl": "https://ik.imagekit.io/77pzczg37zw/0_aCG0bG4Uh4t9-6C-.jpg",
            "rating": 1,
            "authorId": 2,
            "genreId": 5,
            "createdAt": "2021-06-11T12:18:55.726Z",
            "updatedAt": "2021-06-11T12:18:55.726Z"
        },
        {
            "id": 12,
            "title": "Doraemon: Nobita's Dinosaur - 2006",
            "synopsis": "Doraemon - Nobita's Dinosaur 2006, also known as Doraemon: The Movie 2006 and Doraemon and the Little Dinosaur, is a traditionally animated feature film which is a remake of the first, 1980, Doraemon film Doraemon: Nobita's Dinosaur.",
            "trailerUrl": "https://www.youtube.com/embed/1udlBviHgzQ",
            "imgUrl": "https://ik.imagekit.io/77pzczg37zw/doraemon-poster-1.jpg",
            "rating": 5,
            "authorId": 2,
            "genreId": 7,
            "createdAt": "2021-06-10T16:08:17.076Z",
            "updatedAt": "2021-06-11T12:31:17.535Z"
        }
    ]
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: user not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---


> Update user data

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
{
    "name": "Galuh Adika Alifani",
    "username": "galuhalifani",
    "phoneNumber": "081319023264",
    "address": "Jalan Jalan"
}
```

_Response (200)_
```
{
    "id": 1,
    "name": "galuhalifani",
    "username": "galuhalifani",
    "email": "galuh.adika@gmail.com",
    "role": "admin",
    "phoneNumber": "081319023264",
    "address": "Jalan Jalan",
    "createdAt": "2021-06-10T09:44:38.163Z",
    "updatedAt": "2021-06-12T05:10:07.521Z"
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```
```
{
    "error": "Unauthorized",
    "message": "Invalid User / Login Credentials"
}
```

_Response (403 - Forbidden)_
```
{
    "error": "Forbidden",
    "message": "User not authorized to access the page / perform action"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: user not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### PATCH /movies/:id

> Update movie status

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
{
    "status": "active"
}
```

_Response (200)_
```
{
    "message": "Success! Movie Harry Potter and the Sorcerer's Stone's status is now active"
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```
```
{
    "error": "Unauthorized",
    "message": "Invalid User / Login Credentials"
}
```

_Response (403 - Forbidden)_
```
{
    "error": "Forbidden",
    "message": "User not authorized to access the page / perform action"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: movie not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---


> Add new customer bookmark

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```
_Request Params_
```
{
    "movieId": integer (required)
}
```

_Request Body_
```
not needed
```

_Response (201 - Created)_
```
{
    "message": "Success adding new bookmark",
    "id": 4,
    "userId": 12,
    "movieId": 2,
    "movieTitle": "Titanic"
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```

_Response (403 - Forbidden)_
```
{
    "error": "Forbidden",
    "message": "Only customers can see or perform bookmark actions"
}
```

_Response (404 - Bad Request)_
```
{
    "message": "error: movie not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```