const mongoose = require('../db/connection');

const UserSchema =  new mongoose.Schema({
    name: String,
    favGenre: String,
    lists: [
        {
            ref: "List",
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})


const User = mongoose.model('User', UserSchema);

module.exports = User;