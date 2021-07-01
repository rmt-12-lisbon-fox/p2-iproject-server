# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List
#
# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher
#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []

from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet
# from api.server_api import covidSymptoms
# from api.server_api import coughTypeChecker
import requests


class ActionCheckCovid(Action):
    def name(self) -> Text:
        return 'action_check_covid'

    def run(self,
            dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        genderSlot = tracker.get_slot("gender")
        ageSlot = tracker.get_slot("age")
        headAcheSlot = tracker.get_slot("headAche")
        contactSlot = tracker.get_slot("contact")
        abroadSlot = tracker.get_slot("abroad")
        feverSlot = tracker.get_slot("fever")
        coughSlot = tracker.get_slot("cough")
        shortBreathSlot = tracker.get_slot("shortBreath")

        # print(f"{headAcheSlot} << headAche, {contact} << contact, {abroad} << abroad, {fever} << fever, {cough} << cough, {shortBreath} << shortBreath,")

        userInput = {
          "gender": genderSlot,
          "age": ageSlot,
          "headAche": headAcheSlot,
          "contact": contactSlot,
          "abroad": abroadSlot,
          "fever": feverSlot,
          "cough": coughSlot,
          "shortBreath": shortBreathSlot
        }
        # print(f"USER INPUT di action <<<<< {userInput}")

        try:
          url = 'https://deco-express-2.herokuapp.com/checkCovidSymptoms'
          # print(f"{userInput} <<<<< USER INPUT")
          response = requests.get(url, data = userInput)
          json_data = response.json()
          # print(f"JSON DATA >>>> {json_data}")
          if json_data["has_covid_symptoms"] == '1':
            dispatcher.utter_message("\nYou have covid-19 symptoms!\nPlease go to your nearest hospital, here's a list of hospital you can go to https://covid19.go.id/daftar-rumah-sakit-rujukan")
          else:
            dispatcher.utter_message("\nGreat news, you don't have covid-19 symptoms!\nIf you still need examination, please contact your nearest hospital.\nHere's a list of hospital you can go to https://covid19.go.id/daftar-rumah-sakit-rujukan")
        except Exception as e:
            print(e)
            dispatcher.utter_message("I'm sorry, there's something wrong with your input or the server. Please try again later")


        # try:
        #   hasCovidSymptoms = covidSymptoms(userInput)
        #   if hasCovidSymptoms:
        #     dispatcher.utter_message("\nYou have covid-19 symptoms!\nPlease go to your nearest hospital, here's a list of hospital you can go to https://covid19.go.id/daftar-rumah-sakit-rujukan")
        #   else:
        #     dispatcher.utter_message("\nGreat news, you don't have covid-19 symptoms!\nIf you still need examination, please contact your nearest hospital.\nHere's a list of hospital you can go to https://covid19.go.id/daftar-rumah-sakit-rujukan")
        # except:
        #     dispatcher.utter_message("I'm sorry, there's something wrong with your input or the server. Please try again later")

        return []

class ActionCheckCough(Action):
  def name(self) -> Text:
    return 'action_check_cough'
  
  def run(self,
          dispatcher: CollectingDispatcher,
          tracker: Tracker,
          domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

      urlSlot = tracker.get_slot("url")

      try:
        url = 'https://deco-express-2.herokuapp.com/checkCoughType'
        response = requests.get(url, data = { "url" : urlSlot })
        json_data = response.json()
        print(json_data)
        result = json_data["result"]
        result_text = ''
        for data in result:
          result_text += f"The cough type is {data['coughType']} from {data['startSeconds']} to {data['endSeconds']} seconds\n"
        # print(f"{result_text} <<<< RESULT TEXT")
        dispatcher.utter_message(result_text + "\nIf you have a dry cough, please check for COVID-19.\nHere's the link to see a list of antigen swab test sites https://kesehatan.kontan.co.id/news/inilah-daftar-rumah-sakit-dan-klinik-penyedia-tes-pcr-swab-virus-corona?page=all")
      except Exception as e:
        print(e)
        dispatcher.utter_message("I'm sorry, there's something wrong with your input or the server. Please try again later")


      # try:
      #   result = coughTypeChecker(urlSlot)
      #   dispatcher.utter_message(result + "\nIf you have a dry cough, please check for COVID-19.\nHere's the link to see a list of antigen swab test sites https://kesehatan.kontan.co.id/news/inilah-daftar-rumah-sakit-dan-klinik-penyedia-tes-pcr-swab-virus-corona?page=all")
      # except:
      #   dispatcher.utter_message("I'm sorry, there's something wrong with your input or the server. Please try again later")

      # result = coughTypeChecker(urlSlot)
      # dispatcher.utter_message(result + "\n If you have a dry cough, please check for COVID-19.\nHere's the link to see a list of antigen swab test sites https://kesehatan.kontan.co.id/news/inilah-daftar-rumah-sakit-dan-klinik-penyedia-tes-pcr-swab-virus-corona?page=all")

      
# class ActionDefaultFallback(Action):

#    def name(self):
#       return "action_default_fallback"

#    def run(self, dispatcher, tracker, domain):
#       dispatcher.utter_message("Sorry, I couldn't understand.") 


# 1. Greeting
# 2. What can you do
# 3. COVID information (definition, symptoms)
# 4. Check covid symptoms
# 5. Check type of cough