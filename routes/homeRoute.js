const express = require ('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to Rate Your Investor!')
})

module.exports = router