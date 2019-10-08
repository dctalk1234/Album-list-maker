const mongoose = require('../db/connection');

const ListSchema = new mongoose.Schema({
    name: String,
    albums: [
        {
            ref: "Album",
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})

const List = mongoose.model('List', ListSchema);

module.exports = List;