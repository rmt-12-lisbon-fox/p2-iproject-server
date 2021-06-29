const { unogsAPI } = require("../Helper/api");

class FilmController {

    static async getListOfFilm(req, res) {
        let page = req.query.page || 1;
        let params = {
            limit: 10,
            offset: (page - 1) * 10,
            orderby: `dateDesc`
        }

        try {
            let result = await unogsAPI({
                url: '/search',
                params: { ...params },
                headers: {
                    'x-rapidapi-key': 'a4e0a04627msh51476a18f2f769ap124b24jsn474823c609db',
                    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                  }
                
            })
            res.status(200).json(result.data);
        } catch (err) {
            res.status(500).json({ message: err });
        }   
    }
}

module.exports = FilmController;