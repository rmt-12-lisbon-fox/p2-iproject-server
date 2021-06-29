const axios = require('axios')
const FormData = require('form-data')

module.exports = (req, res, next) => {
  if (req.file) {
    let api_key = Buffer.from(process.env.IMAGEKIT_KEY, "utf-8").toString("base64");
      const formData = new FormData();
      formData.append('file', req.file.buffer.toString("base64"));
      formData.append('fileName', req.file.originalname);
      console.log(req.file)  // ini => hasil req.file//
      // MANTRA axios
      axios({
        url: 'https://upload.imagekit.io/api/v1/files/upload',
        method: 'post',
        headers: {
          Authorization: `Basic ${api_key}`,
          ...formData.getHeaders()
        },
        data : formData
      })
      .then(image => {
        req.url = image.data.url
        next()
        console.log(image)
        console.log('ini image data',image.data)
        console.log('ini URL nya', req.url)
        // res.status(200).json({url: req.url})
      })
      .catch(err => {
        next({code:500});
      })
  } else next()
}