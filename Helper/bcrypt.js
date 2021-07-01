const bcrypt = require('bcryptjs');

function encrypt(password) {
    return bcrypt.hashSync(password, +process.env.SALT);
}

function decrypt(password, hash) {
    return bcrypt.compareSync(password, hash);
}

module.exports = {
    encrypt,
    decrypt
}