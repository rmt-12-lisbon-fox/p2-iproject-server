const jikan = require('../APIs/jikanMal')
const simpleAnime = require('../APIs/simpleAnime')

class Controller {
    static searchAnime (req, res, next) {
        let {q} = req.body

        jikan({
            url: `/search/anime`,
            params: {q},
            method: 'get'
        })
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static upcomingAnime (req, res, next) {
        jikan({
            url: `season/later`,
            method: 'get'
        })
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
    
    
    static latestAnime (req, res, next) {
        simpleAnime({
            url: '/list/recent',
            method: 'get'
        })
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    

    static detailAnime (req, res, next) {
        let {vid_id} = req.body

        simpleAnime({
            url: `/info/videos/${vid_id}`,
            method: 'get'
        })
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static searchAnimeVideos (req, res, next) {
        let {keyword} = req.body

        simpleAnime({
            url: `/search/${keyword}`,
            method: 'get'
        })
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
    
}

module.exports = Controller