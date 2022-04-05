const bcrypt = require('bcryptjs')

function bcryptCreate(pass) {
    return bcrypt.hashSync(pass, 5)
}

function bcryptCheck(pass, hashed) {
    return bcrypt.compareSync(pass, hashed)
}

module.exports = {
    bcryptCreate,
    bcryptCheck
}