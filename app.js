require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const route = require('./Routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use('/', route);

app.listen(PORT, _ => {
    console.log(`Listening port ${PORT}`);
})