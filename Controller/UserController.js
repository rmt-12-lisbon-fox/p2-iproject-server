const { decrypt } = require('../Helper/bcrypt');
const { jwtSign } = require('../Helper/jwt');
const { User } = require('../models');

class UserController {

    static async register(req, res) {
        let data = {
            email: req.body.email || '',
            password: req.body.password || '',
            name: req.body.name || '',
            imageUrl: req.body.imageUrl,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address
        }

        try {
            let result = await User.create(data);
            res.status(201).json({ id: result.id, email: result.email });
        } catch (err) {
            if (err.errors) {
                let listErr = err.errors.map( el => el.message ).join(", ");
                res.status(400).json({ message: listErr });
            }else {
                res.status(500).json({ message: err });
            }
        }
    }

    static async login(req, res) {
        let email = req.body.email;
        let pasword = req.body.password;

        try {
            let result = await User.findOne({
                where: {
                    email
                }
            })
            if (result) {
                if (decrypt(pasword, result.password)) {
                    let payload = {
                        id: result.id, email: result.email
                    }
                    let token = jwtSign(payload);
                    res.status(200).json({ access_token: token });
                }else {
                    throw 400;
                }
            }else {
                throw 400;
            }
        } catch (err) {
            if (err === 400) {
                res.status(err).json({ message: 'Invalid email/password' });
            }else {
                res.status(500).json({ message: err });
            }
        }
    }

    static async findById(req, res) {
        let id = req.user.id;
        try {
            let result = await User.findOne({
                where: {
                    id
                }
            })
            if (result) {
                res.status(200).json(result);
            }else {
                throw 404;
            }
        } catch (err) {
            if (err === 404) {
                res.status(err).json({ message: 'not found' });
            }else {
                res.status(500).json({ message: err });
            }
        }
    }

    static async updateUser(req, res) {
        let data = {
            email: req.body.email || '',
            name: req.body.name || '',
            imageUrl: req.body.imageUrl,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address
        }
        let id = req.user.id;

        try {
            let result = await User.update(data, {
                where: {
                    id
                }
            })
            if (result[0] === 1) {
                res.status(200).json({ message: 'Update is successfull' });
            }else {
                throw 404;
            }
        } catch (err) {
            if (err === 404) {
                res.status(err).json({ message: 'not found' });
            }else if (err.errors) {
                let listErr = err.errors.map( el => el.message ).join(", ");
                res.status(400).json({ message: listErr });
            }else{
                res.status(500).json({ message: err });
            }
        }
    }
}

module.exports = UserController;