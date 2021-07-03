const { unogsAPI } = require("../Helper/api");
const { Film, sequelize } = require('../models');
const queryInterface = sequelize.getQueryInterface();

class FilmController {
    static async create(listOfFilm) {
        try {
            await Film.destroy({truncate: { cascade: true }});
            await queryInterface.bulkInsert('Films', listOfFilm);
        } catch (err) {
            throw err;
        }
    }


    static async getListOfFilm(req, res) {
        let page = req.query.page || 1;
        let limit= 20;
        let offset =  (page - 1) * 20;

        try {
            let result = await Film.findAndCountAll({
                limit,
                offset
            });

            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ message: err.response.data });
        }   
    }

    static async getUnoGSAPI() {
        let params = {
            limit: 100,
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
            return result.data.results;
        } catch (err) {
            throw err.response.data
        } 
    }
}

module.exports = FilmController;