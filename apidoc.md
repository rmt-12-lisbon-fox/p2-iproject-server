# My Job Finder App Server
My Job Finder App is an application to manage your Job Finder. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response
&nbsp;

## RESTful endpoints
### Post /companies

> Create New Company

_Request Header_
```
{
    "access_token" = "{Id,Email,Role}"
}
```

_Request Body_
```
{
    "name":"Garuda Indonesia",
    "companyLogo": "https://awsimages.detik.net.id/content/2009/07/23/4/Garuda-Logo-Vertical-dalam.jpg",
    "location":"jakarta",
    "email":"LionAir@indonesia.com",
    "description":"Jasa Penerbangan"
}
```

_Response (201 - created)_
```
{
    "id": 8,
    "name": "Garuda Indonesia",
    "companyLogo": "https://awsimages.detik.net.id/content/2009/07/23/4/Garuda-Logo-Vertical-dalam.jpg",
    "location": "jakarta",
    "email": "LionAir@indonesia.com",
    "description": "Jasa Penerbangan",
    "updatedAt": "2021-06-07T12:28:15.913Z",
    "createdAt": "2021-06-07T12:28:15.913Z"
}
```

_Response (400 - Bad Request)_
```
{
    "message": [
        "Must be URL",
        "Logo required",
        "Location required"
    ]
}
```
_Response (500 - internal server error)_
```
{
    "message":"<string>"
}
```
---
### GET /companies

> Get All Companies

_Request Header_
```
{
    "access_token" = "<Your Access Token>"
}
```

_Request Body_
```
{
not needed
}
```

_Response (200 - ok)_
```
{
    "Companies":
    {
        [
            {
                "id": 4,
                "name": "Garuda Indonesia",
                "companyLogo": "https://awsimages.detik.net.id/content/2009/07/23/4/Garuda-Logo-Vertical-dalam.jpg",
                "location": "jakarta",
                "email": "garuda@indonesia.com",
                "description": "Jasa Penerbangan",
                "createdAt": "2021-06-07T08:33:25.521Z",
                "updatedAt": "2021-06-07T09:17:33.844Z"
            },
            {
                "id": 8,
                "name": "Garuda Indonesia",
                "companyLogo": "https://awsimages.detik.net.id/content/2009/07/23/4/Garuda-Logo-Vertical-dalam.jpg",
                "location": "jakarta",
                "email": "LionAir@indonesia.com",
                "description": "Jasa Penerbangan",
                "createdAt": "2021-06-07T12:28:15.913Z",
                "updatedAt": "2021-06-07T12:28:15.913Z"
            }
        ]
    }
}
```

_Response (500 - internal server error)_
```
{
  "message": "<string>"
}
```
### GET /companies/:id

> Get One Company Base on ID

_Request Header_
```
{
    "access_token" = "{Id,Email,Role}"
}
```

_Request Body_
```
{
not needed
}
```

_Response (200 - ok)_
```

{
    "id": 4,
    "name": "Garuda Indonesia",
    "companyLogo": "https://awsimages.detik.net.id/content/2009/07/23/4/Garuda-Logo-Vertical-dalam.jpg",
    "location": "jakarta",
    "email": "garuda@indonesia.com",
    "description": "Jasa Penerbangan",
    "createdAt": "2021-06-07T08:33:25.521Z",
    "updatedAt": "2021-06-07T09:17:33.844Z"
}
```
_Response (404 - not found)_
```

{
    "message": "Data Not Found"
}
```

_Response (500 - internal server error)_
```
{
  "message": "<string>"
}
```
### PUT /companies/:id

> Edit Company Base On ID

_Request Header_
```
{
    "access_token" = "{Id,Email,Role}"
}
```

_Request Body_
```

{
    "name":"Garuda Indonesia",
    "companyLogo": "https://awsimages.detik.net.id/content/2009/07/23/4/Garuda-Logo-Vertical-dalam.jpg",
    "location":"jakarta",
    "email":"garuda@indonesia.com",
    "description":"Jasa Penerbangan"
}

```

_Response (200 - ok)_
```

{
    "name": "Garuda Indonesia",
    "companyLogo": "https://awsimages.detik.net.id/content/2009/07/23/4/Garuda-Logo-Vertical-dalam.jpg",
    "location": "jakarta",
    "email": "garuda@indonesia.com",
    "description": "Jasa Penerbangan"
}
```
_Response (400 - bad request)_
```
{
    "message": [
        "Name required",
        "Must be URL",
        "Logo required",
        "Email Required",
        "Input Must Be Email Format"
    ]
}
```
_Response (404 - not found)_
```
{
    "message": "Data Not Found"
}
```

_Response (500 - internal server error)_
```
{
  "message": "<string>"
}
```
### DELETE /companies/:id

> Delete One Company Base On ID

_Request Header_
```
{
    "access_token" = "{Id,Email,Role}"
}
```