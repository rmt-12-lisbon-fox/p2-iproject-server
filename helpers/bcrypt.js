var bcrypt = require('bcryptjs');

function toHash(raw) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(raw, salt);
  return hash
}

function checkHash(input, DB) {
  return bcrypt.compareSync(input, DB)
}

module.exports = { checkHash, toHash }