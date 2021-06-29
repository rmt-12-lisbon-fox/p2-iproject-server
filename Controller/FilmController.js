const { unogsAPI } = require("../Helper/api");

class FilmController {

    static async getListOfFilm(req, res) {
        let page = req.query.page || 1;
        let params = {
            limit: 10,
            offset: (page - 1) * 10,
            orderby: `dateDesc`
        }
        let apiKey = process.env.API_KEY;
        try {
            console.log('Hit getListOfFIlm API')
            let result = await unogsAPI({
                method: 'GET',
                url: '/search',
                params: {
                  ...params
                },
                headers: {
                  'x-rapidapi-key': apiKey,
                  'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                }
            })
            res.status(200).json(result.data);
        } catch (err) {
            res.status(500).json({ message: err.response.data });
        }   
    }
}

module.exports = FilmController;