const bcrypt = require('bcrypt');
const saltRounds = 10;

function hash(password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

function checkPassword(myPlaintextPassword, hash){
    return bcrypt.compareSync(myPlaintextPassword, hash);
}

module.exports = {
    hash,
    checkPassword
}


