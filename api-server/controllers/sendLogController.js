const nodemailer = require('nodemailer');


class Controller {
  static sendLog (req,res, next) {
    const messages = req.body.messages
    const email = req.body.email
    // console.log(email, "<<< email")
    let messages_text = "Here's the chat log: \n"
    messages.forEach(message => {
      if (message.source) {
        messages_text += `Source: ${message.source}\nMessage: ${message.message}\n\n`
      } else {
        messages_text += `Source: You\nMessage: ${message.message}\n\n`
      }
    })
    // console.log(messages_text)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'deco.chatbot@gmail.com',
          pass: 'decodecodeco'
      }
    });

    const mailOptions = {
      from: 'deco.chatbot@gmail.com',
      to: email,
      subject: 'Chat Log From DECO',
      text: messages_text
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error)
        res.status(500).json({ messages: error })
      } else {
        res.status(200).json({ messages: 'Message sucess' })
      }
    }); 
      
  }
}

module.exports = Controller