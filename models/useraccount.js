const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const schema = mongoose.Schema;


const useraccount = mongoose.Schema({
    first: { type: String },
    last: { type: String },
    // address:    {type: String},
    // phone1:     {type:String},
    // phone2:     {type:String},
    username: { type: String, required: true },
    password: { type: String, required: true },
    // role:       {type: String},
    // gender:     {type: String}
});

module.exports = mongoose.model('users', useraccount);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function (username, callback) {
    const query = { username: username }
    User.findOne(query, callback);
}

module.exports.addUser = function (newUser, callback) {
    newUser.save(callback);


    // bcrypt.genSalt(10, (err, salt) => {
    //   bcrypt.hash(newUser.password, salt, (err, hash) => {
    //     if(err) throw err;
    //     newUser.password = hash;
    //     newUser.save(callback);
    //   });
    // });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}