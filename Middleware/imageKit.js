const FormData = require('form-data');
const { imageKitAPI } = require('../Helper/api');

async function imageKit(req, res, next) {
    let apiKey = Buffer.from(process.env.PRIVATE_KEY, 'utf-8').toString("base64");

    if (!req.file) {
        res.status(400).json({ message: 'You should add profile picture' });
    }else if (req.file.size > 255000) {
        res.status(400).json({ message: "Your image file is larger than 255 KB" });
    }else if (req.file || req.body.imageUrl) {
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
}

module.exports = {
    imageKit
}