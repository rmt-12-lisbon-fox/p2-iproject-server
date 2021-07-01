# iproject-server
API server for Individual Project

# Safe-Travel-server 
This app has:
* RESTful endpoint for app's CRUD operation
* JSON formatted response

## RESTful endpoints

1. Method | Route 
| ------ | -----    
| POST   | /register  

> Register an account

<br>

### Request Header
>Not needed

<br>

### Request Body
```javascript
{
    "email": "example@gmail.com",
    "password" : "password"
}
```
<br>

### Response(201 - Created)

```javascript
{
    "id": "1",
    "email" : "example@gmail.com"
}
```

2. Method | Route 
| ------ | -----    
| POST   | /login  
> login

<br>

#### Request Header
>Not needed

<br>

#### Request Body
```javascript
{
    "email": "example@gmail.com",
    "password" : "password"
}
```
<br>

#### Response(200 - Ok)

```javascript
{
    "accessToken": <your_access_token>
}
```

#### Response(401 - Not Authorized)
```javascript
{
    {
      "code": 401,
      "message"; "email / password is wrong"
    }
}
```

3. Method | Route 
| ------ | -----    
| POST   | /share 
> Share a destination target

<br>

#### Request Header
```javascript
  access_token : "<your access token>"
``` 
<br>

#### Request Body
```javascript
{
    "email": "yourfriend@gmail.com",
    "name" : "destination name"
}
```

<br>

#### Response(200 - Ok)
```javascript
{message : 'Email sent: 250 2.0.0 OK  1625095609 r14sm23859913pgm.28 - gsmtp'}

```
<br>

4. Method | Route 
| ------ | -----    
| POST   | /bookmark 
> Add a bookmark

<br>

#### Request Header
```javascript
  access_token : "<your access token>"
``` 
<br>

#### Request Body
```javascript
{
    "name": "string",
    "description" : "text,
    "imgUrl": "string"
}
```

<br>

#### Response(201 - Created)
```javascript
{
    "id": 10,
    "name": "string",
    "imgUrl": "string",
    "UserId": "integer",
    "updatedAt": "2021-06-07T15:03:08.477Z",
    "createdAt": "2021-06-07T15:03:08.477Z"
}
```

<br>

5. Method | Route 
| ------ | -----    
| GET   | /bookmark 
> Get bookmark data

<br>

#### Request Header
```javascript
  access_token : "<your access token>"
``` 
<br>

#### Request Body
>not needed

<br>

#### Response(200 - Ok)
```javascript
[  
  {
    "id": 10,
    "name": "string",
    "imgUrl": "string",
    "UserId": "integer",
    "updatedAt": "2021-06-07T15:03:08.477Z",
    "createdAt": "2021-06-07T15:03:08.477Z"
  ]
```

<br>

6. Method | Route 
| ------ | -----    
| DELETE   | /bookmark/:id 
> Delete bookmark data by id

<br>

#### Request Header
```javascript
  access_token : "<your access token>"
``` 

<br>

#### Request Body
>Not needed

<br>

#### Response(200 - Ok)
```javascript
{
    "message": "bookmark berhasil dihapus"
}
```

<br>

#### Response(404 - Not Found)
```javascript
{
  "code": 404,
  "message": "Error not found"
}
```

7. Method | Route 
| ------ | -----    
| POST   | /countriesposition 
> Get all travel destination near country or city user inputed 

<br>

#### Request Header
>Not needed
<br>

#### Request Body
```javascript
{
    "country": "malaysia"
}
```

<br>

#### Response(200 - Ok)
```javascript
{
    "data": {
        "getPlaces": [
            {
                "name": "Gunung Mulu National Park",
                "lat": 4.132,
                "lng": 114.919,
                "abstract": null,
                "distance": 324446,
                "categories": [
                    "NATURE",
                    "MAJOR",
                    "MUSEUM",
                    "UNESCO"
                ]
            },
            {
                "name": "Danau Sentarum National Park",
                "lat": 0.85,
                "lng": 112.1,
                "abstract": null,
                "distance": 188988,
                "categories": [
                    "NATURE",
                    "MAJOR"
                ]
            }
      ]
    }
}
```
<br>

8. Method | Route 
| ------ | -----    
| POST   | /destinationinfo 
> Get a general information about travel destination

<br>

#### Request Header
>Not needed
<br>

#### Request Body
Make sure to send the data in multipart/form-data format

```javascript
{
    "query" : "Gunung Mulu National Park"
}      
```

<br>

#### Response(200 - Ok)
```javascript
{
    "_type": "all",
    "didUMean": "",
    "totalCount": 2057,
    "relatedSearch": [],
    "value": [
        {
            "id": "1421629414758420329",
            "title": "Gunung Mulu National Park - Wikipedia",
            "url": "https://en.wikipedia.org/wiki/Gunung_Mulu_National_Park",
            "description": "The Gunung Mulu National Park is a national park in Miri Division, Sarawak, Malaysia, is a UNESCO World Heritage Site that encompasses caves and karst formations in a mountainous equatorial rainforest setting. The park is famous for its caves and the expeditions that have been mounted to explore them and their surrounding rainforest, most notably the Royal Geographical Society Expedition of 19771978, which saw over 100 scientists in the field for 15 months. This initiated a series of over 20 expeditions now drawn together as the Mulu Caves Project.",
            "body": "The Gunung Mulu National Park is a national park in Miri Division, Sarawak, Malaysia, is a UNESCO World Heritage Site that encompasses caves and karst formations in a mountainous equatorial rainforest setting. The park is famous for its caves and the expeditions that have been mounted to explore them and their surrounding rainforest, most notably the Royal Geographical Society Expedition of 19771978, which saw over 100 scientists in the field for 15 months. This initiated a series of over 20 expeditions now drawn together as the Mulu Caves Project.",
            "snippet": "The <b><b>Gunung Mulu National Park</b></b> is a national park in Miri Division, Sarawak, Malaysia, is a UNESCO World Heritage Site that encompasses caves and karst formations in a mountainous equatorial rainforest setting. The park ...",
            "keywords": "",
            "language": "en",
            "isSafe": true,
            "datePublished": "0001-01-01T00:00:00",
            "provider": {
                "name": "wikipedia",
                "favIcon": "",
                "favIconBase64Encoding": ""
            },
            "image": {
                "url": "",
                "height": 0,
                "width": 0,
                "thumbnail": "",
                "thumbnailHeight": 0,
                "thumbnailWidth": 0,
                "base64Encoding": "",
                "name": null,
                "title": null,
                "provider": {
                    "name": "wikipedia",
                    "favIcon": "",
                    "favIconBase64Encoding": ""
                },
                "imageWebSearchUrl": null,
                "webpageUrl": "https://en.wikipedia.org/wiki/Gunung_Mulu_National_Park"
            }
        }
    ]
}
```

<br>

9. Method | Route 
| ------ | -----    
| POST   | /citiesdestination 
> Get langitude and longitude form a city

<br>

#### Request Header
>Not needed
<br>

#### Request Body
```javascript
{
    "name": "surabaya"
}
```

<br>

#### Response(200 - Ok)
```javascript
{
    "id": 274,
    "name": "SURABAYA",
    "lat": -7.2575,
    "long": 112.7521,
    "createdAt": "2021-07-01T02:18:58.080Z",
    "updatedAt": "2021-07-01T02:18:58.080Z"
}
```
<br>