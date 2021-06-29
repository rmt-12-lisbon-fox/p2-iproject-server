require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const coronaSymptomsApi = require('./apis/coronaSymptomsAPI');
const coughAPI = require('./apis/coughApi');

app.get('/corona', (req, res) => {
    console.log(req.body, "<<<< req.body")
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
            console.log(userInput);
            res.status(200).json(response.data);
        })
        .catch(err => {
            // console.log(err);
            res.status(500).json({message : 'Internal server error'});
        })
});

app.get('/cough', (req,res) => {
    console.log(req.body, "<<<< req.body")
    coughAPI
        .post('/v1/recognize/url', {
                url: req.body.url
        }, {})
        .then(response => {
            console.log(response.data.result.episodes);
            const episodes = response.data.result.episodes; 
            // const coughType = response.data.result.episodes[0].coughType
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
            console.log(err.config);
            res.status(500).json(err);
        })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
