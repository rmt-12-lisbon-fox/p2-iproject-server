const { unogsAPI } = require("../Helper/api");

class FilmController {

    static async getListOfFilm(req, res) {
        let page = req.query.page || 1;
        let params = {
            limit: 20,
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
            let final = {
                data: result.data.results,
                currentPage: +page
            }
            res.status(200).json(final);
        } catch (err) {
            res.status(500).json({ message: err.response.data });
        }   
    }
}

module.exports = FilmController;