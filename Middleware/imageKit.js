const FormData = require('form-data');
const { imageKitAPI } = require('../Helper/api');

async function imageKit(req, res, next) {
    let apiKey = Buffer.from(process.env.PRIVATE_KEY, 'utf-8').toString("base64");

    let form = new FormData();
    let file = (req.file) ? req.file.buffer : req.body.imageUrl;
    form.append('file', file.toString("base64"));
    
    let fileName = (req.file) ? req.file.originalname : req.body.name;
    form.append('fileName', fileName);
    try {
       let result = await imageKitAPI({
            url: 'files/upload',
            method: "POST",
            headers:{
                "Authorization": `Basic ${apiKey}`,
                ...form.getHeaders() 
            },
            data: form
        })
        req.body.imageUrl = result.data.url;
        next();
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

module.exports = {
    imageKit
}