const mongoose = require('../db/connection');

const AlbumSchema = new mongoose.Schema({
    name: String,
    artist: String
})

const Album = mongoose.model('alum', AlbumSchema);

module.exports = Album;
