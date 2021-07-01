const { Founder, Review, Investor } = require('../models')
let whatsappNotif = require('../features/whatsappNotif')

class Controller {
    static registerInvestors(req, res, next) { // OK
        let newInvestor = {}

        newInvestor.name = req.body.name

        if (req.body.company_name) {
            newInvestor.company_name = req.body.company_name
        } else {
            newInvestor.company_name = null
        }
        newInvestor.region = req.body.region
        newInvestor.industry = req.body.industry

        if (req.body.website_url.includes("https://www") || req.body.website_url.includes("http://www")) {
            newInvestor.website_url = req.body.website_url
        } else if (req.body.website_url.includes("www")) {
            newInvestor.website_url = `https://${req.body.website_url}`
        } else if (req.body.website_url.length> 0) {
            newInvestor.website_url = `https://www.${req.body.website_url}`
        } else {
            newInvestor.website_url = ''
        }

        if (req.body.linkedin_url.includes("https://www") || req.body.linkedin_url.includes("http://www")) {
            newInvestor.linkedin_url = req.body.linkedin_url
        } else if (req.body.linkedin_url.includes("www")) {
            newInvestor.linkedin_url = `https://${req.body.linkedin_url}`
        } else if (req.body.website_url.length> 0) {
            newInvestor.linkedin_url = `https://www.${req.body.linkedin_url}`
        } else {
            newInvestor.linkedin_url = ''
        }

        newInvestor.investor_type = req.body.investor_type
        newInvestor.status = 'Unverified'
        newInvestor.requesterId = req.loggedUser.id
        
        Investor.create(newInvestor)
        .then(user => {
            let data = {}
            data.message = 'Success registering a new investor'
            data.id = user.id
            data.name = user.name
            data.company_name = user.company_name
            data.region = user.region
            data.industry = user.industry
            data.website_url = user.website_url
            data.linkedin_url = user.linkedin_url
            data.investor_type = user.investor_type
            data.status = user.status 

            res.status(201).json(data)
        })
        .catch(err => {
            next({ name: err.name, validation: err.errors, code: 500, message: err.message })
        })
    }

    static fetchInvestors(req, res, next) { // OK
        Investor.findAll({where: {
            status: 'Verified'
        }})
        .then(investors => {
            let allInvestors = []
            let investor;
            for (let i = 0; i < investors.length; i++) {
                investor = {}
                investor.id = investors[i].id
                investor.name = investors[i].name
                investor.company_name = investors[i].company_name
                investor.region = investors[i].region
                investor.industry = investors[i].industry
                investor.website_url = investors[i].website_url
                investor.linkedin_url = investors[i].linkedin_url
                investor.investor_type = investors[i].investor_type
                investor.status = investors[i].status     
                investor.requesterId = investors[i].requesterId     

                allInvestors.push(investor)
            }
            res.status(200).json(allInvestors)
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })  
    }

    static fetchAllInvestors(req, res, next) { // OK
        Investor.findAll({
            order: ['id']
        })
        .then(investors => {
            console.log(investors, 'ASDASD')
            let allInvestors = []
            let investor;
            for (let i = 0; i < investors.length; i++) {
                investor = {}
                investor.id = investors[i].id
                investor.name = investors[i].name
                investor.company_name = investors[i].company_name
                investor.region = investors[i].region
                investor.industry = investors[i].industry
                investor.website_url = investors[i].website_url
                investor.linkedin_url = investors[i].linkedin_url
                investor.investor_type = investors[i].investor_type
                investor.status = investors[i].status     
                investor.requesterId = investors[i].requesterId     

                allInvestors.push(investor)
            }
            res.status(200).json(allInvestors)
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })  
    }

    static fetchInvestorProfile(req, res, next) { // OK
        let investorId = req.params.id
        Investor.findOne({
            where: {
                id: investorId
            },
            include: {
                model: Review,
                include: Founder
            }
        })
        .then(user => {
            if (user) {
                // console.log(user)
                let investor = {} 
                investor.id = user.id
                investor.name = user.name
                investor.company_name = user.company_name
                investor.region = user.region
                investor.industry = user.industry
                investor.website_url = user.website_url
                investor.linkedin_url = user.linkedin_url
                investor.investor_type = user.investor_type
                investor.status = user.status  
                investor.reviews = user.Reviews  

                res.status(200).json(investor)
            } else {
                res.status(404).json({ message: 'error: user not found'} )
            }
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })  
    }

    static verifyInvestor(req, res, next) { // OK
        let investorId = req.params.id
        let investor;
        let phoneNumber;
        Investor.findByPk(investorId)
        .then(user => {
            if (user) {
                if(user.status == 'Unverified') {
                    investor = user
                    return Investor.update({status: 'Verified'}, {
                        where: {
                            id: investorId
                        }
                    })    
                } else {
                    res.status(404).json({ message: 'error: this user is already verified'})                    
                }
            } else {
                res.status(404).json({ message: 'error: user not found'})
            }
        })
        .then(() => {
            return Founder.findByPk(investor.requesterId)
        })
        .then(founder => {
            phoneNumber = founder.phoneNumber
            let message = `Hi ${founder.first_name}!\nThank you for registering a new investor at Rate Your Investor. \n\nWe are letting you know that ${investor.name} is now verified.\n\nYou can start writing a new review for them!\n\nFollow this link to write a new review: <link>`

            req.notifPhone = phoneNumber.toString()
            req.notifMessage = message

            console.log(req.notifPhone, 'NOTIFPHONE')

            return whatsappNotif(req,res,next)
        })
        .then(() => {
            res.status(200).json({message: `${investor.name} is now verified, Whatsapp Notification Sent to ${req.notifPhone}`})
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })
    }
}

module.exports = Controller