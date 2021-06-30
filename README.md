# p2-cms-customer-server
API for cms and customer websites. This app has : 
* RESTful endpoint for CRU operation
* JSON formatted response

&nbsp;

## RESTful endpoints
### GET /reviews

> Get all reviews

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
        "id": 1,
        "FounderId": 2,
        "InvestorId": 1,
        "reviewer": "Anonymous",
        "title": "Slow Response",
        "investor_role": "Lead",
        "investment_stage": "Seed",
        "review": "Very slow response. I did a few meetings with the VC however the processes was not transparent and extremely slow. At the end, the deal went through, but we needed to wait more than 10 months for the entire process to pass through, since every single meeting, the subject from last meetings were repeated",
        "rating_overall": 2,
        "rating_professionalism": 3,
        "rating_speed": 1,
        "rating_dd_complexity": 3,
        "rating_post_inv_support": 0,
        "rating_founder_friendly": 2,
        "likes": 1,
        "likes_id": [
            2
        ],
        "status": "Unverified",
        "createdAt": "2021-06-29T10:38:55.495Z",
        "updatedAt": "2021-06-29T10:41:31.530Z",
        "Investor": {
            "id": 2,
            "name": "BigMoney VC",
            "company_name": "BigMoney VC",
            "region": "Southeast Asia",
            "industry": "Multi-Industry",
            "website_url": "https://www.bigmoneyvc.com",
            "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
            "investor_type": "Venture Capital",
            "status": "Verified",
            "createdAt": "2021-06-29T11:59:56.532Z",
            "updatedAt": "2021-06-29T12:00:42.600Z"
        },
        "Founder": {
            "id": 2,
            "first_name": "Ilya",
            "last_name": "Kravtsov",
            "username": "Ilya85",
            "password": "$2a$05$MXiruX7TifzZER5W3IKsxO744s/JMKHG.rh2MBBlCBgtILedhzjF6",
            "email": "ik@pouchnation.com",
            "phoneNumber": "6287875343066",
            "profilePic": "https://ik.imagekit.io/77pzczg37zw/IK.jpg",
            "region": "Southeast Asia",
            "company_name": "PouchNation",
            "role": "CEO & Founder",
            "company_website": "https://www.pouchnation.com",
            "company_industry": "Media & Entertainment",
            "team_size": "21-50",
            "linkedin_url": "https://www.linkedin.com/in/ilya-kravtsov-0108124/",
            "admin_status": false,
            "active_status": true,
            "createdAt": "2021-06-29T08:34:59.661Z",
            "updatedAt": "2021-06-29T09:18:50.446Z"
        }
    },
    {
        "id": 2,
        "FounderId": 2,
        "InvestorId": 2,
        "reviewer": "Anonymous",
        "title": "Great Support post investment",
        "investor_role": "Lead",
        "investment_stage": "Series A",
        "review": "The VC was very helpful after the investment with the advises and introductions. They even helped me to raise the next round.",
        "rating_overall": 5,
        "rating_professionalism": 5,
        "rating_speed": 3,
        "rating_dd_complexity": 4,
        "rating_post_inv_support": 5,
        "rating_founder_friendly": 5,
        "likes": 1,
        "likes_id": [
            2
        ],
        "status": "Verified",
        "createdAt": "2021-06-29T12:01:41.905Z",
        "updatedAt": "2021-06-29T12:06:33.879Z",
        "Investor": {
            "id": 2,
            "name": "BigMoney VC",
            "company_name": "BigMoney VC",
            "region": "Southeast Asia",
            "industry": "Multi-Industry",
            "website_url": "https://www.bigmoneyvc.com",
            "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
            "investor_type": "Venture Capital",
            "status": "Verified",
            "createdAt": "2021-06-29T11:59:56.532Z",
            "updatedAt": "2021-06-29T12:00:42.600Z"
        },
        "Founder": {
            "id": 2,
            "first_name": "Ilya",
            "last_name": "Kravtsov",
            "username": "Ilya85",
            "password": "$2a$05$MXiruX7TifzZER5W3IKsxO744s/JMKHG.rh2MBBlCBgtILedhzjF6",
            "email": "ik@pouchnation.com",
            "phoneNumber": "6287875343066",
            "profilePic": "https://ik.imagekit.io/77pzczg37zw/IK.jpg",
            "region": "Southeast Asia",
            "company_name": "PouchNation",
            "role": "CEO & Founder",
            "company_website": "https://www.pouchnation.com",
            "company_industry": "Media & Entertainment",
            "team_size": "21-50",
            "linkedin_url": "https://www.linkedin.com/in/ilya-kravtsov-0108124/",
            "admin_status": false,
            "active_status": true,
            "createdAt": "2021-06-29T08:34:59.661Z",
            "updatedAt": "2021-06-29T09:18:50.446Z"
        }
    }
]
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /reviews/:id

> Get review by Id

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
    "FounderId": 2,
    "InvestorId": 1,
    "reviewer": "Anonymous",
    "title": "Slow Response",
    "investor_role": "Lead",
    "investment_stage": "Seed",
    "review": "Very slow response. I did a few meetings with the VC however the processes was not transparent and extremely slow. At the end, the deal went through, but we needed to wait more than 10 months for the entire process to pass through, since every single meeting, the subject from last meetings were repeated",
    "rating_overall": 2,
    "rating_professionalism": 3,
    "rating_speed": 1,
    "rating_dd_complexity": 3,
    "rating_post_inv_support": 0,
    "rating_founder_friendly": 2,
    "likes": 1,
    "likes_id": [
        2
    ],
    "status": "Unverified",
    "createdAt": "2021-06-29T10:38:55.495Z",
    "updatedAt": "2021-06-29T10:41:31.530Z",
    "Investor": {
        "id": 2,
        "name": "BigMoney VC",
        "company_name": "BigMoney VC",
        "region": "Southeast Asia",
        "industry": "Multi-Industry",
        "website_url": "https://www.bigmoneyvc.com",
        "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
        "investor_type": "Venture Capital",
        "status": "Verified",
        "createdAt": "2021-06-29T11:59:56.532Z",
        "updatedAt": "2021-06-29T12:00:42.600Z"
    },
    "Founder": {
        "id": 2,
        "first_name": "Ilya",
        "last_name": "Kravtsov",
        "username": "Ilya85",
        "password": "$2a$05$MXiruX7TifzZER5W3IKsxO744s/JMKHG.rh2MBBlCBgtILedhzjF6",
        "email": "ik@pouchnation.com",
        "phoneNumber": "6287875343066",
        "profilePic": "https://ik.imagekit.io/77pzczg37zw/IK.jpg",
        "region": "Southeast Asia",
        "company_name": "PouchNation",
        "role": "CEO & Founder",
        "company_website": "https://www.pouchnation.com",
        "company_industry": "Media & Entertainment",
        "team_size": "21-50",
        "linkedin_url": "https://www.linkedin.com/in/ilya-kravtsov-0108124/",
        "admin_status": false,
        "active_status": true,
        "createdAt": "2021-06-29T08:34:59.661Z",
        "updatedAt": "2021-06-29T09:18:50.446Z"
    }
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
### POST /reviews

> Create new review

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Body_
```
{
    "InvestorId": 1,
    "reviewer": "Anonymous",
    "title": "Great Support post investment",
    "investor_role": "Lead",   
    "investment_stage": "Series A",
    "review": "The VC was very helpful after the investment with the advises and introductions. They even helped me to raise the next round.",
    "rating_overall": 5,
    "rating_professionalism": 5,   
    "rating_speed": 3,
    "rating_dd_complexity": 4,
    "rating_post_inv_support": 5,
    "rating_founder_friendly": 5
}
```

_Response (201 - Created)_
```
{
    "id": 3,
    "FounderId": 2,
    "InvestorId": 1,
    "reviewer": "Anonymous",
    "title": "Slow Response",
    "investor_role": "Lead",
    "investment_stage": "Seed",
    "review": "Very slow response. I did a few meetings with the VC however the processes was not transparent and extremely slow. At the end, the deal went through, but we needed to wait more than 10 months for the entire process to pass through, since every single meeting, the subject from last meetings were repeated",
    "rating_overall": 2,
    "rating_professionalism": 3,
    "rating_speed": 1,
    "rating_dd_complexity": 3,
    "rating_post_inv_support": 0,
    "rating_founder_friendly": 2,
    "likes": 0,
    "likes_id": [],
    "status": "Unverified",
    "createdAt": "2021-06-29T10:38:55.495Z",
    "updatedAt": "2021-06-29T10:41:31.530Z",
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

_Response (403 - Forbidden)_
```
{
    "error": "Unauthorized",
    "message": "Please verify your account (email address) first"
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
    "email": "rateyourinvestor@gmail.com",
    "password": "password123"
}
```

_Response (200)_
```
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6IkFkbWluIiwibGFzdF9uYW1lIjoiVXNlciIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6InJhdGV5b3VyaW52ZXN0b3JAZ21haWwuY29tIiwicm9sZSI6IkFkbWluLCBSYXRlIFlvdXIgSW52ZXN0b3IiLCJwaG9uZU51bWJlciI6IjYyODEzMTkwMjMyNjQiLCJwcm9maWxlUGljIjoiIiwicmVnaW9uIjoiU291dGhlYXN0IEFzaWEiLCJjb21wYW55X25hbWUiOiJSYXRlIFlvdXIgSW52ZXN0b3IiLCJjb21wYW55X3dlYnNpdGUiOiIiLCJjb21wYW55X2luZHVzdHJ5IjoiIiwidGVhbV9zaXplIjoiMS0yMCIsImxpbmtlZGluX3VybCI6IiIsImFkbWluX3N0YXR1cyI6dHJ1ZSwiYWN0aXZlX3N0YXR1cyI6dHJ1ZSwiaWF0IjoxNjI0OTY4OTYyfQ.BgOj6-qGC0z42PtLWKafX7PKDOjPIykelO1BGpgv-6k",
    "user": {
        "id": 1,
        "first_name": "Admin",
        "last_name": "User",
        "username": "admin",
        "email": "rateyourinvestor@gmail.com",
        "role": "Admin, Rate Your Investor",
        "phoneNumber": "6281319023264",
        "profilePic": "",
        "region": "Southeast Asia",
        "company_name": "Rate Your Investor",
        "company_website": "",
        "company_industry": "",
        "team_size": "1-20",
        "linkedin_url": "",
        "admin_status": true,
        "active_status": true
    }
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
  user: {
    "id": 1,
    "first_name": "Admin",
    "last_name": "User",
    "username": "admin",
    "email": "rateyourinvestor@gmail.com",
    "role": "Admin, Rate Your Investor",
    "phoneNumber": "6281319023264",
    "profilePic": "",
    "region": "Southeast Asia",
    "company_name": "Rate Your Investor",
    "company_website": "",
    "company_industry": "",
    "team_size": "1-20",
    "linkedin_url": "",
    "admin_status": true,
    "active_status": true
  }  
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
### GET /founders

> Get all founders with admin_status = false

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
        "active_status": true
    }
]
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
### GET /founders/:id

> Get founder by id

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
    "active_status": true,
    "reviews": [
        {
            "id": 1,
            "FounderId": 2,
            "InvestorId": 1,
            "reviewer": "Anonymous",
            "title": "Slow Response",
            "investor_role": "Lead",
            "investment_stage": "Seed",
            "review": "Very slow response. I did a few meetings with the VC however the processes was not transparent and extremely slow. At the end, the deal went through, but we needed to wait more than 10 months for the entire process to pass through, since every single meeting, the subject from last meetings were repeated",
            "rating_overall": 2,
            "rating_professionalism": 3,
            "rating_speed": 1,
            "rating_dd_complexity": 3,
            "rating_post_inv_support": 0,
            "rating_founder_friendly": 2,
            "likes": 1,
            "likes_id": [
                2
            ],
            "status": "Unverified",
            "createdAt": "2021-06-29T10:38:55.495Z",
            "updatedAt": "2021-06-29T10:41:31.530Z",
            "Investor": {
                "id": 1,
                "name": "Jump VC",
                "company_name": "Jump VC",
                "region": "China & Hong-Kong",
                "industry": "Media & Entertainment",
                "website_url": "https://www.jumpvc.com",
                "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
                "investor_type": "Venture Capital",
                "status": "Verified",
                "createdAt": "2021-06-29T09:20:57.032Z",
                "updatedAt": "2021-06-29T12:22:11.075Z"
            }
        },
        {
            "id": 2,
            "FounderId": 2,
            "InvestorId": 2,
            "reviewer": "Anonymous",
            "title": "Great Support post investment",
            "investor_role": "Lead",
            "investment_stage": "Series A",
            "review": "The VC was very helpful after the investment with the advises and introductions. They even helped me to raise the next round.",
            "rating_overall": 5,
            "rating_professionalism": 5,
            "rating_speed": 3,
            "rating_dd_complexity": 4,
            "rating_post_inv_support": 5,
            "rating_founder_friendly": 5,
            "likes": 1,
            "likes_id": [
                2
            ],
            "status": "Verified",
            "createdAt": "2021-06-29T12:01:41.905Z",
            "updatedAt": "2021-06-29T12:06:33.879Z",
            "Investor": {
                "id": 2,
                "name": "BigMoney VC",
                "company_name": "BigMoney VC",
                "region": "Southeast Asia",
                "industry": "Multi-Industry",
                "website_url": "https://www.bigmoneyvc.com",
                "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
                "investor_type": "Venture Capital",
                "status": "Verified",
                "createdAt": "2021-06-29T11:59:56.532Z",
                "updatedAt": "2021-06-29T12:00:42.600Z"
            }
        }
    ]
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
### PATCH /reviews/verify/:id

> Update review status

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
    "message": "Review with ID 3 is now verified"
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
    "message": "Only Admin is authorized to perform this action"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: review not found"
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
### PATCH /investors/verify/:id

> Update investor status

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
    "message": "Jump VC is now verified"
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
    "message": "Only Admin is authorized to perform this action"
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
### GET /investors

> Get all investors

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 2,
        "name": "BigMoney VC",
        "company_name": "BigMoney VC",
        "region": "Southeast Asia",
        "industry": "Multi-Industry",
        "website_url": "https://www.bigmoneyvc.com",
        "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
        "investor_type": "Venture Capital",
        "status": "Verified"
    },
    {
        "id": 1,
        "name": "Jump VC",
        "company_name": "Jump VC",
        "region": "China & Hong-Kong",
        "industry": "Media & Entertainment",
        "website_url": "https://www.jumpvc.com",
        "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
        "investor_type": "Venture Capital",
        "status": "Verified"
    }
]
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /investors/:id

> Get investor by id

_Request Header_
```
not needed
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
    "name": "BigMoney VC",
    "company_name": "BigMoney VC",
    "region": "Southeast Asia",
    "industry": "Multi-Industry",
    "website_url": "https://www.bigmoneyvc.com",
    "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
    "investor_type": "Venture Capital",
    "status": "Verified",
    "reviews": [
        {
            "id": 3,
            "FounderId": 2,
            "InvestorId": 2,
            "reviewer": "Anonymous",
            "title": "Great Support post investment",
            "investor_role": "Lead",
            "investment_stage": "Series A",
            "review": "The VC was very helpful after the investment with the advises and introductions. They even helped me to raise the next round.",
            "rating_overall": 5,
            "rating_professionalism": 5,
            "rating_speed": 3,
            "rating_dd_complexity": 4,
            "rating_post_inv_support": 5,
            "rating_founder_friendly": 5,
            "likes": 1,
            "likes_id": [
                2
            ],
            "status": "Verified",
            "createdAt": "2021-06-29T12:01:41.905Z",
            "updatedAt": "2021-06-29T12:06:33.879Z",
            "Founder": {
                "id": 2,
                "first_name": "Ilya",
                "last_name": "Kravtsov",
                "username": "Ilya85",
                "password": "$2a$05$MXiruX7TifzZER5W3IKsxO744s/JMKHG.rh2MBBlCBgtILedhzjF6",
                "email": "ik@pouchnation.com",
                "phoneNumber": "6287875343066",
                "profilePic": "https://ik.imagekit.io/77pzczg37zw/IK.jpg",
                "region": "Southeast Asia",
                "company_name": "PouchNation",
                "role": "CEO & Founder",
                "company_website": "https://www.pouchnation.com",
                "company_industry": "Media & Entertainment",
                "team_size": "21-50",
                "linkedin_url": "https://www.linkedin.com/in/ilya-kravtsov-0108124/",
                "admin_status": false,
                "active_status": true,
                "createdAt": "2021-06-29T08:34:59.661Z",
                "updatedAt": "2021-06-29T09:18:50.446Z"
            }
        }
    ]
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
### GET /founders/verify/:id