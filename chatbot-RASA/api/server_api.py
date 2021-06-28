import requests

def covidSymptoms(userInput):
  url = 'http://localhost:3000/corona'
  # print(f"{userInput} <<<<< USER INPUT")
  response = requests.get(url, data = userInput)
  json_data = response.json()
  # print(f"JSON DATA >>>> {json_data}")
  if json_data["has_covid_symptoms"] == '1':
    return True
  else:
    return False

def coughTypeChecker(urlValue):
  url = 'http://localhost:3000/cough'
  response = requests.get(url, data = urlValue)
  json_data = response.json()
  result = json_data["result"]
  result_text = ''
  for data in result:
    result_text += f"The cough type is {data['coughType']} from {data['startSeconds']} to {data['endSeconds']} seconds\n"
  print(f"{result_text} <<<< RESULT TEXT")
  return json_data["result"]