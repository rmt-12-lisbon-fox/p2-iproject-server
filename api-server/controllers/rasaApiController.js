const rasaApi = require('../apis/rasaApi')

class Controller {
  static talkToChatbot (req, res, next) {
    rasaApi
      .post('/webhook', {
        "sender": req.body.sender,
        "message": req.body.message
      })
      .then(response => {
          const chatbot_response = response.data.map(el => el.text)
          res.status(200).json({ reply: chatbot_response})
      })
      .catch(err => {
        console.log(err)
        next({ code: 500 })
      })
  }
}

module.exports = Controller