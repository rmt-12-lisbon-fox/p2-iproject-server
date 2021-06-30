const coronaSymptomsApi = require('../apis/coronaSymptomsAPI')

class Controller {
  static checkCovidSymptoms (req, res, next) {
    const userInput = {
      female : (req.body.gender).toLowerCase() === 'female' ? 1 : 0,
      male: (req.body.gender).toLowerCase() === 'male' ? 1 : 0,
      above60: +req.body.age > 60 ? 1 : 0,
      below60: +req.body.age <= 60 ? 1 : 0,
      headAche: (req.body.headAche).toLowerCase() === 'yes' ? 1 : 0,
      contact: (req.body.contact).toLowerCase() === 'yes' ? 1 : 0,
      abroad: (req.body.abroad).toLowerCase() === 'yes' ? 1 : 0,
      fever: (req.body.fever).toLowerCase() === 'yes' ? 1 : 0,
      cough: (req.body.cough).toLowerCase() === 'yes' ? 1 : 0,
      shortBreath: (req.body.shortBreath).toLowerCase() === 'yes' ? 1 : 0,
    }

    console.log(userInput, "<<<<<user input masukk")
  coronaSymptomsApi
      .post("/", {
          "has_head_ache": userInput.headAche,
          "is_female": userInput.female,
          "contact_with_confirmed": userInput.contact,
          "has_been_abroad": userInput.abroad,
          "is_male": userInput.male,
          "has_fever": userInput.fever,
          "has_cough": userInput.cough,
          "above_60_yes": userInput.above60,
          "above_60_no": userInput.below60,
          "has_shortness_of_breath": userInput.shortBreath 
      })
      .then(response => {
          res.status(200).json(response.data)
      })
      .catch(err => {
          next({ code: 500 })
      })
  }
}

module.exports = Controller