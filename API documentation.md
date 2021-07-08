# API-DOCUMENTATION
This API documentation has : 
* RESTful endpoint
* JSON formatted response
* base URL: https://smartinvestmen123.herokuapp.com/
* base URL: http://localhost:3000


&nbsp; 

**Register**
----
  Returns json data about a single user.

* **URL**

  /register

* **Method:**

  `POST`
  
* **URL Params**

  None
* **Request Headers**

  None
* **Request Body**
  ```
  {
    "email": "ressdi@mail.com",
    "password": "Apalagi1@",
    "phoneNumber": "081247548765",
  }
  ```

  None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
    "email":"ressdi@mail.com",
    "phoneNumber":"081247548765",
    "id":7,
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```
    { error : [
      "please input your email address",
      "password must be contain 5 char - 10 char, at least 1 UPPERCASE, 1 lowercase, 1 Number, dan 1 Special-Character",
      "your SIMPATI number is not valid, please enter your SIMPATI number with 0812 atau 0813 ==> 081299884455"
    ] }
    ```

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`


&nbsp;

**Login**
----
  Returns json data about a single user.

* **URL**

  /login

* **Method:**

  `POST`
  
* **URL Params**

  None
* **Request Headers**
  
  None
* **Request Body**

  ```
  {
    "email": "ressdi@mail.com",
    "password": "Apalagi1@",
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbnRvc28iLCJlbWFpbCI6InNhbnRvc29AbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJwaG9uZU51bWJlciI6IjA4MTI1NjQzNzY1NCIsImFkZHJlc3MiOiJqYWxhbiBrZW9uZyBtZXJiYWJ1IG5vbW9yIDY5IiwiaWQiOjEsImlhdCI6MTYyMzA5MzkyMX0.bv97ujCGxE2cMpFuAv6dg4woyruJO6keu_2A-8VH21o"}
    ```
 
* **Error Response:**


  * **Code:** 401 NOT AUTHORIZED <br />
    **Content:** `{ error : "Username and Password not match." }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`


&nbsp;


**Google Login**
----
  Returns json data about a single user.

* **URL**

  /googlelogin

* **Method:**

  `POST`
  
* **URL Params**

  None
* **Request Headers**
  ```
  {
    "id_Token": "<googletoken>"
  }
  ```
* **Request Body**

  None
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbnRvc28iLCJlbWFpbCI6InNhbnRvc29AbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJwaG9uZU51bWJlciI6IjA4MTI1NjQzNzY1NCIsImFkZHJlc3MiOiJqYWxhbiBrZW9uZyBtZXJiYWJ1IG5vbW9yIDY5IiwiaWQiOjEsImlhdCI6MTYyMzA5MzkyMX0.bv97ujCGxE2cMpFuAv6dg4woyruJO6keu_2A-8VH21o"}
    ```
 
* **Error Response:**


  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`


&nbsp;


**Signal**
----
  Returns json data about a single user.

* **URL**

  /signal

* **Method:**

  `POST`
  
* **URL Params**

  None
* **Request Headers**

  None
* **Request Body**

  ```
  {
    "title": "<ticker of market>"
    "signal": "<buy or sell>"
  }
  ```
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
    "title": "<ticker of market>"
    "signal": "<buy or sell>"
    }
    ```
 
* **Error Response:**


  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`


&nbsp;


**Market**
----
  Returns json data about a single user.

* **URL**

  /market

* **Method:**

  `GET`
  
* **URL Params**

  None
* **Request Headers**

  None
* **Request Body**

  None
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
    "btc": {
        "high": "524128000",
        "low": "495000000",
        "vol_btc": "126.49626829",
        "vol_idr": "64388572223",
        "last": "505000000",
        "buy": "505000000",
        "sell": "505001000",
        "server_time": 1625079939
    },
    "eth": {
        "high": "32178000",
        "low": "30341000",
        "vol_eth": "1290.35767331",
        "vol_idr": "39977790955",
        "last": "32007000",
        "buy": "32006000",
        "sell": "32007000",
        "server_time": 1625079939
    },
    "doge": {
        "high": "3871",
        "low": "3475",
        "vol_doge": "13126021.72537027",
        "vol_idr": "47981609617",
        "last": "3655",
        "buy": "3654",
        "sell": "3655",
        "server_time": 1625079939
    },
    "ltc": {
        "high": "2136000",
        "low": "1983000",
        "vol_ltc": "1083.50360399",
        "vol_idr": "2223216113",
        "last": "2044000",
        "buy": "2041000",
        "sell": "2044000",
        "server_time": 1625079939
    },
    "xrp": {
        "high": "10398",
        "low": "9440",
        "vol_xrp": "1348042.44628120",
        "vol_idr": "13309274556",
        "last": "9803",
        "buy": "9801",
        "sell": "9802",
        "server_time": 1625079939
    }}
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`


&nbsp;


**Adzan**
----
  Returns json data about a single user.

* **URL**

  /adzan

* **Method:**

  `GET`
  
* **URL Params**

  None
* **Request Headers**

  None
* **Request Body**

  None
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
    "subuh": "04:41",
    "terbit": "06:03",
    "duhur": "11:57",
    "asar": "15:19",
    "magrib": "17:51",
    "isya": "19:05"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`


&nbsp;


**Best XRP**
----
  Returns json data about a single user.

* **URL**

  /bestxrp

* **Method:**

  `GET`
  
* **URL Params**

  None
* **Request Headers**
   ```
  {
    "accessToken": "<accesstoken>"
  }
  ```
* **Request Body**

  None
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
    "xrp": "<sell or buy>"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`


&nbsp;


**Best BTC**
----
  Returns json data about a single user.

* **URL**

  /bestbtc

* **Method:**

  `GET`
  
* **URL Params**

  None
* **Request Headers**
   ```
  {
    "accessToken": "<accesstoken>"
  }
  ```
* **Request Body**

  None
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
    "btc": "<sell or buy>"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`


&nbsp;


**Best LTC**
----
  Returns json data about a single user.

* **URL**

  /bestltc

* **Method:**

  `GET`
  
* **URL Params**

  None
* **Request Headers**
  ```
  {
    "accessToken": "<accesstoken>"
  }
  ```
* **Request Body**

  None
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
    "ltc": "<sell or buy>"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`


&nbsp;


**Best ETH**
----
  Returns json data about a single user.

* **URL**

  /besteth

* **Method:**

  `GET`
  
* **URL Params**

  None
* **Request Headers**
  ```
  {
    "accessToken": "<accesstoken>"
  }
  ```
* **Request Body**

  None
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
    "eth": "<sell or buy>"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`


&nbsp;


**Best DOGE**
----
  Returns json data about a single user.

* **URL**

  /bestdoge

* **Method:**

  `GET`
  
* **URL Params**

  None
* **Request Headers**
  ```
  {
    "accessToken": "<accesstoken>"
  }
  ```
* **Request Body**

  None
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
    "doge": "<sell or buy>"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error." }`


&nbsp;
