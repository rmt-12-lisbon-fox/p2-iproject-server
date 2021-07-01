const passport = require('passport')
const passportSteam = require('passport-steam')
const steamStrategy = passportSteam.Strategy

// passport.serializeUser((user, done) => {
//   done(null, user);
// });
// passport.deserializeUser((user, done) => {
//   done(null, user);
// });
// Initiate Strategy
function steamAuth(){
  return passport.use(new steamStrategy({
    returnURL: 'http://localhost:3000/api/auth/steam/return',
    realm: 'http://localhost:3000/',
    apiKey: '9D8345D36DB3BF8E9FB1A5F2E03D547D'
  }, function (identifier, profile, done) {
    process.nextTick(function () {
      profile.identifier = identifier;
      return done(null, profile);
    });
  }));
}

module.exports = steamAuth