# API-DOCUMENTATION
This API documentation has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response
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
  ```
  {
    "accessToken": "<accesstoken>"
  }
  ```
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
  ```
  {
    "accessToken": "<accesstoken>"
  }
  ```
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
