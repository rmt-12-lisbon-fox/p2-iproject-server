# Go-Exercise App

`Apps for choose exercise program and remind user according user's schedule`


# Videos

* GET/videos (Fetch All Chosen Video From Youtube) 

URL
```
/videos
```

Method:
```
GET
```

_Request Header_
```
None
```

_Request Body_
```
None
```
Url Params
```
None
```

Success Response :
* Status Code : 200 (OK)
* Body :
```
{
    "items": [
        {
            "id": "xRt4LSANIoU",
            "snippet": {
                "title": "Quick 10 Minute Upper Body Strength Workout - Dumbbell Upper Body Workout",
                "thumbnails": {
                    "medium": {
                        "url": "https://i.ytimg.com/vi/xRt4LSANIoU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    }
                }
            }
        }
    ]
}
```

Error Response :
* Status Code : 500 (INTERNAL SERVER ERROR)
* Body :

```
    {
        "message" : "Internal Server Error"
    }

```

* POST/videos (Insert All Fetched Video To Database) 

URL
```
/videos
```

Method:
```
POST
```

_Request Header_
```
None
```

_Request Body_
```
None
```
Url Params
```
None
```

Success Response :
* Status Code : 201 (CREATED)
* Body :
```
{
    "items": [
        {
            "id": "xRt4LSANIoU",
            "snippet": {
                "title": "Quick 10 Minute Upper Body Strength Workout - Dumbbell Upper Body Workout",
                "thumbnails": {
                    "medium": {
                        "url": "https://i.ytimg.com/vi/xRt4LSANIoU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    }
                }
            }
        },
        {
            "id": "xRt4LSANIoU",
            "snippet": {
                "title": "Quick 10 Minute Upper Body Strength Workout - Dumbbell Upper Body Workout",
                "thumbnails": {
                    "medium": {
                        "url": "https://i.ytimg.com/vi/xRt4LSANIoU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    }
                }
            }
        }
    ]
}
```

Error Response :
* Status Code : 500 (INTERNAL SERVER ERROR)
* Body :

```
    {
        "message" : "Internal Server Error"
    }

```

# Register

* POST/register (Create New User) 

URL
```
/register
```

Method:
```
POST
```

_Request Header_
```
None
```

_Request Body_
```
username : <string>,
email : <string>,
password : <string>,
age : <string>,
gender : <string>,
```
Url Params
```
None
```

Success Response :
* Status Code : 201 (CREATED)
* Body :
```
{
   id : 1,
   email : ada@gmail.com
}
```

Error Response :
* Status Code : 500 (INTERNAL SERVER ERROR)
* Body :

```
    {
        "message" : "Internal Server Error"
    }

```
# Login

* POST/login (Login into account) 

URL
```
/login
```

Method:
```
POST
```

_Request Header_
```
None
```

_Request Body_
```
email : <string>,
password : <string>,
```
Url Params
```
None
```

Success Response :
* Status Code : 200 (OK)
* Body :
```
{
   access_token : agasgasgsih3h548dzjkbcjfbafafsf-q1t,
   id : 1,
   email : ada@gmail.com,
   username : ada
}
```

Error Response :
* Status Code : 500 (INTERNAL SERVER ERROR)
* Body :

```
    {
        "message" : "Internal Server Error"
    }

```
# Programs

* GET/programs (Fetch All Programs Data) 

URL
```
/programs
```

Method:
```
GET
```

_Request Header_
```
access_token : <string JWT token>
```

_Request Body_
```
None
```
Url Params
```
None
```

Success Response :
* Status Code : 200 (OK)
* Body :
```
[
    {
        "id": 1,
        "title": "Express 5 Minute Abs Workout Nonstop Abs & Obliques Workout Routine",
        "type": "Flexible",
        "videoId": "https://www.youtube.com/embed/IZ7bIRWE3Fs",
        "thumbnail": "https://i.ytimg.com/vi/IZ7bIRWE3Fs/mqdefault.jpg",
        "description": null,
        "createdAt": "2021-06-29T19:51:43.124Z",
        "updatedAt": "2021-06-29T19:51:43.124Z"
    },
    {
        "id": 2,
        "title": "5 Minute Inner Thigh Workout for Lean Toned Thighs",
        "type": "Flexible",
        "videoId": "https://www.youtube.com/embed/qqUpFHzCzfU",
        "thumbnail": "https://i.ytimg.com/vi/qqUpFHzCzfU/mqdefault.jpg",
        "description": null,
        "createdAt": "2021-06-29T19:51:43.137Z",
        "updatedAt": "2021-06-29T19:51:43.137Z"
    },
    {
        "id": 3,
        "title": "Quick 100 Rep Abs Workout - Intense Ab Workout at Home",
        "type": "Flexible",
        "videoId": "https://www.youtube.com/embed/T9AD9JB2rWQ",
        "thumbnail": "https://i.ytimg.com/vi/T9AD9JB2rWQ/mqdefault.jpg",
        "description": null,
        "createdAt": "2021-06-29T19:51:43.139Z",
        "updatedAt": "2021-06-29T19:51:43.139Z"
    },
]
```

Error Response :
* Status Code : 500 (INTERNAL SERVER ERROR)
* Body :

```
    {
        "message" : "Internal Server Error"
    }

```
* GET/programs/:id (Fetch Program Data By Id) 

URL
```
/programs/:id
```

Method:
```
GET
```

_Request Header_
```
access_token : <string JWT token>
```

_Request Body_
```
None
```

Url Params
```
None
```

Success Response :
* Status Code : 200 (OK)
* Body :
```

    {
        "id": 1,
        "title": "Express 5 Minute Abs Workout Nonstop Abs & Obliques Workout Routine",
        "type": "Flexible",
        "videoId": "https://www.youtube.com/embed/IZ7bIRWE3Fs",
        "thumbnail": "https://i.ytimg.com/vi/IZ7bIRWE3Fs/mqdefault.jpg",
        "description": null,
        "createdAt": "2021-06-29T19:51:43.124Z",
        "updatedAt": "2021-06-29T19:51:43.124Z"
    }

```

Error Response :
* Status Code : 500 (INTERNAL SERVER ERROR)
* Body :

```
    {
        "message" : "Internal Server Error"
    }

```
# Schedule

* GET/mySchedule (Fetch All Schedule Data From User) 

URL
```
/programs
```

Method:
```
GET
```

_Request Header_
```
access_token : <string JWT token>
```

_Request Body_
```
None
```
Url Params
```
None
```

Success Response :
* Status Code : 200 (OK)
* Body :
```
{
    "id": 1,
    "username": "ada",
    "email": "ada@gmail.com",
    "age": 24,
    "gender": "male",
    "createdAt": "2021-06-29T19:52:03.303Z",
    "updatedAt": "2021-06-29T19:52:03.303Z",
    "Programs": []
}
```

Error Response :
* Status Code : 500 (INTERNAL SERVER ERROR)
* Body :

```
    {
        "message" : "Internal Server Error"
    }

```
* POST/mySchedule (Create Schedule For User) 

URL
```
/mySchedule
```

Method:
```
POST
```

_Request Header_
```
access_token : <string JWT token>
```

_Request Body_
```
ProgramId : <integer>,
intensity : <string (Low, Moderate, High)>,
ProgramTitle : <string>,
UserId : <integer>,
```

Url Params
```
None
```

Success Response :
* Status Code : 201 (CREATED)
* Body :
```

    {
        "id": 1,
        "intensity": "High",
        "UserId": 1,
        "ProgramId": 3,
        "createdAt": "2021-06-29T19:51:43.124Z",
        "updatedAt": "2021-06-29T19:51:43.124Z"
    }

```

Error Response :
* Status Code : 500 (INTERNAL SERVER ERROR)
* Body :

```
    {
        "message" : "Internal Server Error"
    }

```
# Reminders

* GET/reminders (Fetch All Reminders Data For Specific User) 

URL
```
/reminders
```

Method:
```
GET
```

_Request Header_
```
access_token : <string JWT token>
```

_Request Body_
```
None
```
Url Params
```
None
```

Success Response :
* Status Code : 200 (OK)
* Body :
```
[
    {
        "id": 1,
        "message": "Hei ada! You have schedule to do Thai Boxing today.. Cheers!",
        "UserId": 1,
        "createdAt": "2021-06-29T19:52:03.303Z",
        "updatedAt": "2021-06-29T19:52:03.303Z",
    },
    {
        "id": 2,
        "message": "Hei ada! You have schedule to do Thai Boxing today.. Cheers!",
        "UserId": 1,
        "createdAt": "2021-06-29T19:52:03.303Z",
        "updatedAt": "2021-06-29T19:52:03.303Z",
    }
]

```

Error Response :
* Status Code : 500 (INTERNAL SERVER ERROR)
* Body :

```
    {
        "message" : "Internal Server Error"
    }

```
* POST/reminders (Create Reminders Based On intensity User Choose) 

URL
```
/reminders
```

Method:
```
POST
```

_Request Header_
```
access_token : <string JWT token>
```

_Request Body_
```
UserId : <integer>,
message : <string>,
```

Url Params
```
None
```

Success Response :
* Status Code : 201 (CREATED)
* Body :
```

    {
        "id": 1,
        "message": "Hei ada! You have schedule to do Thai Boxing today.. Cheers!",
        "UserId": 1,
        "createdAt": "2021-06-29T19:51:43.124Z",
        "updatedAt": "2021-06-29T19:51:43.124Z"
    }

```

Error Response :
* Status Code : 500 (INTERNAL SERVER ERROR)
* Body :

```
    {
        "message" : "Internal Server Error"
    }

```
