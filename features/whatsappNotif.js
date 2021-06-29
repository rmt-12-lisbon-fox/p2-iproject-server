function whatsappNotif(req, res, next) {
    let axios = require('axios')

    // URL for request POST /message

    var token = 'mmie2rlxicbg9cnm';
    var instanceId = '295680';
    var url = `https://api.chat-api.com/instance${instanceId}/message?token=${token}`;
    var data = {
        phone: '6281319023264', // Receivers phone
        body: 'HUAHAHAHAHH!', // Message
    };

    axios({
        url: url,
        method: "POST",
        data: data
    })
    .then(() => {
        console.log('success!')
        res.status(200).json({message: `Message Sent ${data.body}`})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: err})
    })
}

module.exports = whatsappNotif