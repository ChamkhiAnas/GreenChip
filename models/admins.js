const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    user: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }

}, {
    collection: 'administrator'
})




const Admins = module.exports = mongoose.model('administrator', adminSchema);

module.exports.getUserById = function (id, callback) {
    Admins.findById(id, callback);
}
module.exports.getUserById = function (user, callback) {
    const query = {
        user: user
    }
    Admins.findOne(query, callback);
}

module.exports.addUser = function (newUser, callback) {
    bycrypt.genSalt(10, (err, salt) => {
        bycrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bycrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}