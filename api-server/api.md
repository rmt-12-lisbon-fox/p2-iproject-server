# DECO App Server
Base URL : http://localhost:3000


DECO App is a chatbot web based application where you can ask about COVID-19 and check COVID-19 symptoms or cough type. This app has : 
* RESTful endpoint for user login and connect to 3rd party api (Coronavirus Symptoms Predictor API and CoughAPI)
* JSON formatted response

&nbsp;

## List of available RESTful endpoints
### 1. GET /checkCoughType (Get cough type)
Get cough type  from CoughAPI. Returning JSON (object) cough type.
* Method

    `GET`

* URL
    
    `/checkCoughType`

* Request Params

    `None`

* Request Headers 

    `None`

* Request Body

    ```
    Required :
    url=[string]
    ```

* Request Query

    `None`

* Success Response :
    * Status Code : 200 (OK)
    * Body
        ```
        {
            "result": [
                {
                    "coughType": "dry",
                    "startSeconds": "3.7",
                    "endSeconds": "3.9"
                },
                {
                    "coughType": "dry",
                    "startSeconds": "3.9",
                    "endSeconds": "4.3"
                }
            ]
        }
        ```
    ----
* Error Response :
    * Status Code : 500 (INTERNAL SERVER ERROR)
    * Body
        ```
        {
            "message": "Internal Server Error"
        }
        ```

### 2. GET /checkCovidSymptoms (Get prediction about the user have COVID-19 or not)
Get prediction about the user have COVID-19 or not with Coronavirus Symptoms Predictor API. Returning JSON (object) prediction.
* Method

    `GET`

* URL
    
    `/checkCovidSymptoms`

* Request Params

    `None`

* Request Headers 

    `None`

* Request Body

    ```
    Required :
    gender=[string]
    age=[string]
    headAche=[string]
    contact=[string]
    abroad=[string]
    fever=[string]
    cough=[string]
    shortBreath=[string]
    ```

* Request Query

    `None`

* Success Response :
    * Status Code : 200 (OK)
    * Body
        ```
        {
            "has_covid_symptoms": "1"
        }
        ```
    ----
* Error Response :
    * Status Code : 500 (INTERNAL SERVER ERROR)
    * Body
        ```
        {
            "message": "Internal Server Error"
        }
        ```

### 3. POST /talkToChatbot (Talk to RASA Chatbot)
Send a message to RASA chatbot and get the reply. Returning JSON (object) chatbot reply message.
* Method

    `POST`

* URL
    
    `/talkToChatbot`

* Request Params

    `None`

* Request Headers 

    `
    {
        "access_token": your_access_token
    }
    `

* Request Body

    ```
    Required :
    sender=[text]
    message=[text]
    ```

* Request Query

    `None`

* Success Response :
    * Status Code : 200 (OK)
    * Body
        ```
        {
            "reply": [
                "Hi! I'm DECO, your personal chatbot! How can I help you?\nIf you need help, type 'help'"
            ]
        }
        ```
    ----
* Error Response :
    * Status Code : 500 (INTERNAL SERVER ERROR)
    * Body
        ```
        {
            "message": "Internal Server Error"
        }
        ```

### 4. POST /loginGoogle (Login with Google)
Login to web application with google login. Returning JSON (object) access token.
* Method

    `POST`

* URL
    
    `/loginGoogle`

* Request Params

    `None`

* Request Headers 

    `None`

* Request Body

    ```
    Required :
    idToken=[text]
    ```

* Request Query

    `None`

* Success Response :
    * Status Code : 200 (OK)
    * Body
        ```
        {
            "access_token": your_access_token
        }
        ```
    ----
* Error Response :
    * Status Code : 500 (INTERNAL SERVER ERROR)
    * Body
        ```
        {
            "message": "Internal Server Error"
        }
        ```