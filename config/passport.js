const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Users = require('../models/admins');


module.exports = function (passport) {
    let opts = {};
    opts.jwtFormRequest = ExtractJwt.fromAuthHeader();
    opts.secret0rKey = 'admin';
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        Users.getUserById(jwt_payload._id, (err, user) => {
            if (err) {
                return done(err, false);
            }

            if (user) {
                return done(null, user)
            } else {
                return done(null, false);
            }

        });
    }))
}