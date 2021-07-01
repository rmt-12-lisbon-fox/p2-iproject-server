import requests

baseURL = 'http://localhost:3000'
def covidSymptoms(userInput):
  url = f'{baseURL}/checkCovidSymptoms'
  # print(f"{userInput} <<<<< USER INPUT")
  response = requests.get(url, data = userInput)
  json_data = response.json()
  # print(f"JSON DATA >>>> {json_data}")
  if json_data["has_covid_symptoms"] == '1':
    return True
  else:
    return False

def coughTypeChecker(urlValue):
  url = f'{baseURL}/checkCoughType'
  response = requests.get(url, data = { "url" : urlValue })
  json_data = response.json()
  result = json_data["result"]
  result_text = ''
  for data in result:
    result_text += f"The cough type is {data['coughType']} from {data['startSeconds']} to {data['endSeconds']} seconds\n"
  # print(f"{result_text} <<<< RESULT TEXT")
  return result_text