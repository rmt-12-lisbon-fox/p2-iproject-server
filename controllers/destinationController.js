const axios = require('../helpers/axios')
const { Destination, MyDestination, User, City } = require('../models');

class Controller {

    static addBookmark(req, res, next) {
        const UserId = req.user.id;
        const email = req.user.email;
        const { name, description, imgUrl } = req.body;

        MyDestination.create({
            UserId,
            name,
            description,
            imgUrl
        })
            .then(result => {
                res.status(201).send(result)
            })
            .catch(err => {
                next(err);
            })
    }

    static getBookmark(req, res, next) {
        const UserId = req.user.id;
        const email = req.user.email;

        MyDestination.findAll({
            where: {
                UserId
            }
        })
            .then(result => {
                res.status(200).send({ data: result })
            })
            .catch(err => {
                next(err);
            })
    }

    static deleteBookmark(req, res, next) {
        const UserId = req.user.id;
        const email = req.user.email;
        const BookmarkId = req.params.id
        MyDestination.destroy({
            where: {
                id: BookmarkId
            }
        })
            .then(result => {
                res.status(200).send({ message: "bookmark berhasil dihapus" })
            })
            .catch(err => {
                next(err);
            })
    }

    static getCityDestination(req, res, next) {
        let { name } = req.body

        name = name.toUpperCase();
        City.findOne({
            where: {
                name
            }
        })
            .then(city => {
                if (city) {
                    const { lat, long } = city

                    return axios.worldGeo({
                        method: 'post',
                        headers: {
                            'content-type': 'application/json',
                            'x-rapidapi-key': process.env.rapidapikey,
                            'x-rapidapi-host': 'travel-places.p.rapidapi.com'
                        },
                        data: {
                            query: `{ getPlaces(categories:["NATURE"],lat:${lat},lng:${long},maxDistMeters:50000) { name,lat,lng,abstract,distance,categories } }`
                        }
                    })

                } else {
                    next({ "code": 404, "message": "Not found" })
                }
            })
            .then(result => {
                res.status(200).send(result.data);
            })
            .catch(err => {
                next(err)
            })
    }

    static getCountriesPosition(req, res, next) {
        const { country } = req.body

        axios.country({
            method: 'post',
            url: '/positions',
            data: {
                "country": country
            }
        })
            .then(result => {
                let lat = result.data.data.lat;
                let lng = result.data.data.long
                return axios.worldGeo({
                    method: 'post',
                    headers: {
                        'content-type': 'application/json',
                        'x-rapidapi-key': process.env.rapidapikey,
                        'x-rapidapi-host': 'travel-places.p.rapidapi.com'
                    },
                    data: {
                        query: `{ getPlaces(categories:["NATURE"],lat:${lat},lng:${lng},maxDistMeters:500000) { name,lat,lng,abstract,distance,categories } }`
                    }
                })

            })
            .then(travelPlaces => {
                res.status(200).send(travelPlaces.data);
            })
            .catch(err => {
                next(err);
            })
    }


    // static getCountryDetail(req, res, next) {
    //     const { code } = req.body

    //     axios.worldGeo({
    //         method: 'get',
    //         url: `countries/${code}`,
    //         params: { language: 'en,ru,zh,es,ar,fr,fa,ja,pl,it,pt,de' },
    //         headers: {
    //             'x-rapidapi-key': process.env.rapidapikey,
    //             'x-rapidapi-host': 'world-geo-data.p.rapidapi.com'
    //         }
    //     })
    //         .then(result => {
    //             res.status(200).send(travelPlaces.data);
    //         })

    //         .catch(err => {
    //             next(err);
    //         })
    // }

    static getTravelPlaces(req, res, next) {
        const { lat, lng } = req.body


        axios.worldGeo({
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-key': process.env.rapidapikey,
                'x-rapidapi-host': 'travel-places.p.rapidapi.com'
            },
            data: {
                query: `{ getPlaces(categories:["NATURE"],lat:${lat},lng:${lng},maxDistMeters:500000) { name,lat,lng,abstract,distance,categories } }`
            }
        })
            .then(result => {
                res.status(200).send(result.data);
            })
            .catch(err => {
                next(err);
            })
    }


    static getdestinationinfo(req, res, next) {
        const { query } = req.body


        axios.webSearch({
            url: '/WebSearchAPI',
            method: 'get',
            params: {
                q: query,
                pageNumber: '1',
                pageSize: '10',
                autoCorrect: 'true'
            },
            headers: {
                'x-rapidapi-key': process.env.rapidapikey,
                'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }

        })
            .then(result => {
                res.status(200).send(result.data);
            })
            .catch(err => {
                next(err);
            })
    }

}

module.exports = Controller;