const googleTranslate = require('../3rd-party-api/googleTranslate.js')

function translate(req, res, next) {
    let qs = require('qs')
    let text = req.messageToTranslate
    let lang = req.lang

    let data = qs.stringify({
        q : `${text}`,
        target : `${lang}`,
        format: 'text'
    })

    return googleTranslate.post("https://google-translate1.p.rapidapi.com/language/translate/v2", data, "") 
}

module.exports = translate 