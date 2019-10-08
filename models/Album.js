const mongoose = require('../db/connection');

const AlbumSchema = new mongoose.Schema({
    name: String,
    artist: String
})

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
