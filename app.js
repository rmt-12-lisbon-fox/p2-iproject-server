if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const route = require('./Routes');
const schedule = require('node-schedule');
const FilmController = require('./Controller/FilmController');

const job = schedule.scheduleJob("0 */2 * * *", async () => {
    try {
        let films = await FilmController.getUnoGSAPI();
        let data = films.map( el => {
            return {
                img: el.img,
                title: el.title,
                vtype: el.vtype,
                synopsis: el.synopsis,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        });
        await FilmController.create(data);
        console.log('Update FilmList Done');
    } catch (err) {
        console.log(err);
    }
});


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use('/', route);

app.listen(PORT, _ => {
    console.log(`Listening port ${PORT}`);
})