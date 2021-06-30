const coughAPI = require('../apis/coughApi')

class Controller {
  static checkCoughType (req, res, next) {
    console.log(req.body, "<<< masuk cough type")
    coughAPI
        .post('/v1/recognize/url', {
                url: req.body.url
        }, {})
        .then(response => {
            const episodes = response.data.result.episodes; 
            const result = episodes.map(el => {
                return {
                    coughType: el.coughType,
                    startSeconds: (el.start).toFixed(1),
                    endSeconds: (el.end).toFixed(1)
                }
            })
            res.status(200).json({ result });
        })
        .catch(err => {
          next({ code: 500 })
        })
  }
}

module.exports = Controller