# findISS server

Base URL: localhost:3000

findISS is an app to provide predictions of time the International space station passes over the user's area. This app has: 
* JSON formatted response

### GET /background

_Request Header_
```
not needed
```

_Request Query Params_
```
{
  api_key: <NASA api key>
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
  "date": <date>,
  "explanation": <string>,
  "hdurl": <string>,
  "media_type": <string>,
  "service_version": <string>,
  "title": <string>,
  "url": <string>
}
```
---

### GET /predictions

_Request Header_
```
not needed
```

_Request Query Params_
```
{
  latitude: <number>,
  longitude: <number>
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "country": "Indonesia",
    "city": "Pamagersari",
    "latitude": "-6.491142022103624",
    "longitude": "106.45534453157761",
    "data": [
        {
            "rise": {
                "alt": "10.00",
                "az": "169.41",
                "az_octant": "S",
                "utc_datetime": "2021-06-29 15:54:07.038447+00:00",
                "utc_timestamp": 1624982047,
                "is_sunlit": false,
                "visible": false
            },
            "culmination": {
                "alt": "16.44",
                "az": "127.91",
                "az_octant": "SE",
                "utc_datetime": "2021-06-29 15:56:21.222189+00:00",
                "utc_timestamp": 1624982181,
                "is_sunlit": false,
                "visible": false
            },
            "set": {
                "alt": "10.00",
                "az": "86.37",
                "az_octant": "E",
                "utc_datetime": "2021-06-29 15:58:34.844438+00:00",
                "utc_timestamp": 1624982314,
                "is_sunlit": false,
                "visible": false
            },
            "visible": false
        },
        {
            "rise": {
                "alt": "10.00",
                "az": "263.64",
                "az_octant": "W",
                "utc_datetime": "2021-06-29 17:30:46.829399+00:00",
                "utc_timestamp": 1624987846,
                "is_sunlit": false,
                "visible": false
            },
            "culmination": {
                "alt": "16.28",
                "az": "304.59",
                "az_octant": "NW",
                "utc_datetime": "2021-06-29 17:32:58.948819+00:00",
                "utc_timestamp": 1624987978,
                "is_sunlit": false,
                "visible": false
            },
            "set": {
                "alt": "9.99",
                "az": "345.67",
                "az_octant": "N",
                "utc_datetime": "2021-06-29 17:35:10.708957+00:00",
                "utc_timestamp": 1624988110,
                "is_sunlit": false,
                "visible": false
            },
            "visible": false
        }        
    ]
}
```

---

### POST /email

_Request Header_
```
not needed
```

_Request Query Params_
```
not needed
```

_Request Body_
```
{
  email: <email>,
  city: <string>,
  data: <array>,
  lat: <number>,
  long: <number>
}
```


_Response (200)_
```
{
  message: "Email successfully sent!"
}
```
---

### POST /subscribe

_Request Header_
```
not needed
```

_Request Query Params_
```
not needed
```

_Request Body_
```
{
  email: <email>,
  city: <string>,
  lat: <number>,
  long: <number>
}
```

_Response (200)_
```
{
  message: "Subsciber registered successfully!"
}
```
---