const { Founder } = require('../models')
const nodemailer = require("nodemailer");

function sendEmail(founder) {
    let founderId = founder.id

    Founder.findByPk(founderId)
    .then(founder => {
        email = founder.email
        first_name = founder.first_name
        name = `${founder.first_name} ${founder.last_name}`

        let content = `
        <tbody>
        <h1 style="color:rebeccapurple">${first_name}, Just One More Step!</h1>
        <tr>
        <td style="color:#000000;font-family:adobe-clean,Helvetica Neue,Helvetica,Verdana,Arial,sans-serif;font-size:28px;line-height:32px;padding-top:30px;font-weight:300">Thank you for signing-up, ${first_name}.</td>
        </tr><br>
        <tr>
        <td style="color:#2c2c2c;font-family:adobe-clean,Helvetica Neue,Helvetica,Verdana,Arial,sans-serif;font-size:18px;line-height:22px;padding-bottom:10px">Please verify your email before accessing your account's full features.</td>
        </tr>
        <tr>
        <td style="color:#584040;font-family:adobe-clean,Helvetica Neue,Helvetica,Verdana,Arial,sans-serif;font-size:18px;line-height:22px;padding-top:35px;padding-bottom:5px">After verifying your email, you can access many features of Rate Your Investors, including:</td>
        </tr>
        <tr>
        <td style="color:#2c2c2c;font-family:adobe-clean,Helvetica Neue,Helvetica,Verdana,Arial,sans-serif;font-size:18px;line-height:22px">    
            <ul>
                <li>Write a New Review</li>
                <li>Get Insights on a Potential Investor through Other Founders' Reviews</li>
                <li>Discuss with other Founders</li>
                <li>And Many More!</li>
            </ul> 
        </td>
        </tr>
        <tr>
        <td style="color:#584040;font-family:adobe-clean,Helvetica Neue,Helvetica,Verdana,Arial,sans-serif;font-size:18px;line-height:22px;padding-top:35px;padding-bottom:5px">Please verify your email address by clicking on <a href="https://rate-your-investor.web.app/founders/verify/${founderId}" style="color:#1473e6;text-decoration:none" target="_blank">this link</a></td>
        </tr><br><br>
        <tr>
        <td style="color:#2c2c2c;font-family:adobe-clean,Helvetica Neue,Helvetica,Verdana,Arial,sans-serif;font-size:18px;line-height:22px;padding-bottom:35px">If you have any further questions, don't hesitate to contact us by replying to this e-mail.</td>
        </tr>		   
        </tbody>
        `
        
        async function main() {
            let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'rateyourinvestor@gmail.com', // generated ethereal user
                pass: process.env.NODEMAILER_SENDER_PASSWORD // generated ethereal password
            },
            });
        
            // send mail with defined transport object
            let info = await transporter.sendMail({
            from: '"Rate Your Investor" <rateyourinvestor@gmail.com>', // sender address
            to: email, // list of receivers
            subject: `${name}, Welcome to Rate Your Investor`, // Subject line
            text: "", // plain text body
            html: content, // html body
            });
        
            console.log("MESSAGE SENT: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            }
        
            main().catch(console.error);
            })
            .catch(err => {
                console.log(err)
            })
}

module.exports = sendEmail