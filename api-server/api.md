# DECO App Server
Base URL : http://localhost:3000


DECO App is an chatbot web based application where you can ask about COVID-19 and check symptoms. This app has : 
* RESTful endpoint for user login and connect to 3rd party api (Coronavirus Symptoms Predictor and CoughAPI)
* JSON formatted response

&nbsp;

## List of available RESTful endpoints
### 1. POST /news (Create News)
Creating a new news in database. Returning JSON (object) new news data.
* Method

    `POST`

* URL
    
    `/news`

* Request Params

    `None`

* Request Headers 

     ```
    {
        "access_token": "<your access token>"
    }
    ```

* Request Body

    ```
    Required :
    title=[string]
    content=[text]

    Optional : 
    imgUrl=[string]
    authorId=[integer]
    categoryId=[integer]
    ```

* Request Query

    `None`

* Success Response :
    * Status Code : 201 (CREATED)
    * Body
        ```
        {
            "id": 2,
            "title": "Dollar Rising",
            "content": "Dollar rising in 2021",
            "imgUrl": "https://ik.imagekit.io/vrvrzbdh5xfk/pexels-pixabay-47344_lkxS_aT2Z2.jpg",
            "authorId": 1,
            "categoryId": 2,
            "createdAt": "2021-06-07T10:38:14.207Z",
            "updatedAt": "2021-06-07T10:56:13.951Z",
            "status": "active"
        }
        ```
    ----
* Error Response :
    * Status Code : 400 (BAD REQUEST)
    * Body
        ```
        {
            "message": {
                "errors": [
                    "Title is required!",
                    "Content is required!"
                ]
            }
        }
        ```
        
    OR 

    * Status Code : 500 (INTERNAL SERVER ERROR)
    * Body
        ```
        {
            "message": "Internal Server Error"
        }
        ```