# Movie App Server

This movie app is an application to manage movie database.

Base URL: https://vuetify-wind-123.herokuapp.com || localhost:3000

# RESTful endpoints

&nbsp;

## FOOD BASIC ENDPOINT

### GET /api

Function: query food detailed data from 3rd party API

_Request Header_

```json
NO NEED
```

_Request Query Params_

```
food = name of the food
```

_Query Example_

```
https://vuetify-wind-123.herokuapp.com/api?food=chicken
```

_Response (200 - OK)_
```json
{
  "totalHits": 81,
  "currentPage": 1,
  "totalPages": 27,
  "pageList": [1,2,3,4,5,6,7,8,9,10],
  "foodSearchCriteria": {},
  "foods" : [],
  "aggregations": {}
}
```
the useful information can be found in the "foods" property, which contain information as such:

```json
[
  {
  "fdcId": 1101152,
  "description": "Crisp, apple, apple dessert",
  "lowercaseDescription": "crisp, apple, apple dessert",
  "commonNames": "",
  "additionalDescriptions": "apple betty",
  "dataType": "Survey (FNDDS)",
  "foodCode": 53415100,
  "publishedDate": "2020-10-30",
  "foodCategory": "Cakes and pies",
  "allHighlightFields": "<b>Includes</b>: <em>apple</em> betty",
  "score": 313.61105,
  "foodNutrients": []
  }
]
```

_Response (404 - Not Found)_
```json
{
    "message": [
      "no query found"
    ]
}
```
----

&nbsp;

### GET /recipe

Function: query cuisine recipe from 3rd party API randomly or by suggestion

_Request Header_

```json
NO NEED
```

_Response (200 - OK)_

```json
[ 
  {
    "recipe": {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_72a3b66afe35edd2f162d02d991d0645",
      "label": "Chicken & sweetcorn ramen",
      "image": "https://www.edamam.com/web-img/c5d/c5d4a486b92c53bb3e0a9ef42b5f8f30.jpg",
      "source": "BBC Good Food",
      "url": "https://www.bbcgoodfood.com/recipes/chicken-sweetcorn-ramen",
      "shareAs": "http://www.edamam.com/recipe/chicken-sweetcorn-ramen-72a3b66afe35edd2f162d02d991d0645/chicken/balanced",
      "yield": 2,
      "dietLabels": [
        "Balanced"
      ],
      "healthLabels": [
        "Dairy-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Celery-Free",
        "Mustard-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "Kosher"
      ],
      "cautions": [
        "Sulfites"
      ],
      "ingredientLines": [
        "1 pack instant ramen noodles",
        "600ml chicken stock",
        "½ cooked chicken breast , sliced",
        "4 tbsp sweetcorn , peas or chopped beans",
        "1 egg",
        "sesame oil , to serve (optional)"
      ],
      "calories": 824.7271102828566,
      "totalWeight": 809.7674813899639,
      "totalTime": 15
  }
]
```

----

&nbsp;

### GET /chart

Function: to get chart image comparing the daily user's consume nutrient with the RDA. No need to pass query and params, just need the access_token in request headers. This will return the cart based on users data gained via access_token

_Request Header_

```json
{
  access_token : < YOUR ACCESS TOKEN >
}

```

_Response (200 - OK)_

```json
{
  "chartURL" : "ckchart.io/chart?c=%7Btype%3A%27radar%27%2Cdata%3A%7Blabels%3A%5B%27Protein%27%2C%27Fat%27%2C%27Sugars%27%2C%27Cholesterol%27%2C%27Carbohydrate%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Your+Intake%27%2Cdata%3A%5B29%2C135%2C130%2C278%2C260%5D%2CbackgroundColor%3A%5B%27rgba%2863%2C+81%2C+181%2C+1%29%27%5D%2CborderColor%3A%27rgba%2863%2C+81%2C+181%2C+1%29%27%7D%2C%7Blabel%3A%27Ideal+RDA%27%2CbackgroundColor%3A%5B%27rgba%2889%2C189%2C240%2C+0.75%29%27%5D%2CborderColor%3A%27rgba%2889%2C189%2C240%2C+0.75%29%27%2Cdata%3A%5B65%2C75%2C30%2C300%2C430%5D%7D%5D%7D%2Coptions%3A%7BmaintainAspectRatio%3Atrue%2Cresponsive%3Afalse%2Clayout%3A%7Bpadding%3A%7Bleft%3A50%2Cright%3A50%2Ctop%3A20%2Cbottom%3A20%7D%7D%2Cscale%3A%7BpointLabels%3A%7BfontSize%3A14%7D%2Cticks%3A%7BbeginAtZero%3Atrue%2Cmax%3A500%2Cdisplay%3Atrue%7D%7D%2Ctitle%3A%7Bdisplay%3Atrue%2Ctext%3A%27Daily+Recommended+Dietary+Allowance+Accomplishment%27%2CfontSize%3A24%2Cpadding%3A8%2Cposition%3A%27top%27%7D%2Clegend%3A%7Bposition%3A%27bottom%27%2Cdisplay%3Atrue%7D%7D%7D&w=800&h=400&bkg=transparent&f=png"
}
```

_Response (401 - No Auth)_
```json
{
    "message": [
      "Please login first"
    ]
}
```
----

### GET /record

Function: Add data of users choice to database

_Request Header_

```json
{
  access_token : < YOUR ACCESS TOKEN >
}

```

_Request Query Params_

```

fdcId = Food Data Central ID, gained from the FDA database

```

_Query Example_

```
https://vuetify-wind-123.herokuapp.com/record?fdcId=1102671
```

_Response (200 - OK)_

```json
[
  {
    "name": "Protein",
    "unitName": "g",
    "number": 203,
    "amount": 0.62
  },
  {
    "name": "Total lipid (fat)",
    "unitName": "g",
    "number": 204,
    "amount": 0.3
  },
  {
    "name": "Carbohydrate, by difference",
    "unitName": "g",
    "number": 205,
    "amount": 16.22
  },
  {
    "name": "Energy",
    "unitName": "kcal",
    "number": 208,
    "amount": 64
  },
  {
    "name": "Sugars, total including NLEA",
    "unitName": "g",
    "number": 269,
    "amount": 15.24
  },
  {
    "name": "Cholesterol",
    "unitName": "mg",
    "number": 601,
    "amount": 0
  }
]
```
Note: the return value is an array of object of 6 nutrients within the recorded food. These six elements is the major nutrients chosen by this app


_Response (401 - No Auth)_
```json
{
    "message": [
      "Please login first"
    ]
}
```
----

### GET /diet

Function: Get all recorded food choice of users

_Request Header_

```json
{
  access_token : < YOUR ACCESS TOKEN >
}

```

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "userId": 1,
    "fdcId": 1102654,
    "createdAt": "2021-06-30T02:32:06.097Z",
    "updatedAt": "2021-06-30T02:32:06.097Z",
    "Food": {
      "id": 1,
      "name": "Banana, fried",
      "fdcId": 1102654,
      "protein": 1.19,
      "energy": 151,
      "fat": 3.21,
      "cholesterol": 8,
      "carbohydrate": 32.26,
      "sugars": 20.94,
      "createdAt": "2021-06-30T02:32:06.055Z",
      "updatedAt": "2021-06-30T02:32:06.055Z"
    }
  }
]
```


_Response (401 - No Auth)_
```json
{
    "message": [
      "Please login first"
    ]
}
```
----
