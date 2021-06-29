const axios = require('axios').default;
const FormData = require('form-data')

let api_key = Buffer.from(`${process.env.PRIVATE_KEY}:`, 'utf8').toString('base64')

function toImageKit(req, res, next) {
    let arr = []
    req.files.forEach(e => {
        if (e.mimetype === 'image/png' || e.mimetype === 'image/jpeg') {
            const data = new FormData();
            data.append('file', e.buffer.toString("base64"));
            data.append('fileName', e.originalname);

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
                    arr.push(data.data.url)
                    req.image = arr
                    if (res.image.length === 4) {
                        next()
                    }
                    else if (res.image.length < 4) {
                        next({ code: 400, message: 'Please upload 3 pictures' })
                    }
                }).catch(err => {
                    next({ code: 500, message: err.message })
                })
        } else {
            next({ code: 400, message: 'file type must be png or jpeg' })
        }
    });

}

module.exports = toImageKit