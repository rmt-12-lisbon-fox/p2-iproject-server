function whatsappNotif(req, res, next) {
        let axios = require('axios')
    
        let remark;
        var token = process.env.API_CHAT_TOKEN;
        var instanceId = '295680';
        var url = `https://api.chat-api.com/instance${instanceId}/message?token=${token}`;
        var data = {
            phone: req.notifPhone, // Receivers phone
            body: req.notifMessage, // Message
        };
    
        axios({
            url: url,
            method: "POST",
            data: data
        })
        .then(() => {
            remark = `Whatsapp Notification Sent to ${req.notifPhone}`
            console.log(remark)
        })
        .catch(err => {
            console.log(err)
        })    
}

module.exports = whatsappNotif