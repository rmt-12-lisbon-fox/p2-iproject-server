const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const destinationRouter = require('./destination')
router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.use(userRouter);

router.use(destinationRouter);

module.exports = router;