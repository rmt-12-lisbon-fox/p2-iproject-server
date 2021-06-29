const axios = require("axios");

function musicAPI(req, res, next) {
    axios({
        baseURL: `https://deezerdevs-deezer.p.rapidapi.com/playlist/${req.params.id}`,
        method: 'get',
        headers: {
            'x-rapidapi-key': '041d037ca7msh0297ce6c702fefep14a72ejsn6f88c632d8f9',
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    })
        .then((data) => {
            req.music = `${data.data.type}/${data.data.id}`
            next()
        })
        .catch((err) => {
            next({ code: 500, message: err.message })
        })
}


module.exports = musicAPI