const axios = require('axios').default;
const FormData = require('form-data')

let api_key = Buffer.from(`${process.env.PRIVATE_KEY}:`, 'utf8').toString('base64')

function toImageKit(req, res, next) {
    if (req.file.mimetype === 'image/png' || req.file.mimetype === 'image/jpeg') {
        const data = new FormData();
        data.append('file', req.file.buffer.toString("base64"));
        data.append('fileName', req.file.originalname);

        axios({
            url: 'https://upload.imagekit.io/api/v1/files/upload',
            method: 'post',
            headers: {
                Authorization: `Basic ${api_key}`,
                ...data.getHeaders()
            },
            data: data
        })
            .then((data) => {
                req.image = { url: data.data.url }
                next()
            }).catch(err => {
                next({ code: 500, message: err.message })
            })
    } else {
        next({ code: 400, message: 'file type must be png or jpeg' })
    }
}

module.exports = toImageKit