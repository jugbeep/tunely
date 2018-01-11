const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Songs = require('./song');

let NewAlbum =  ({
    artistName: String,
    name: String,
    releaseDate: String,
    genres: [ String ],
    songs: [ Songs.schema ]
});

let Album = mongoose.model('Album', NewAlbum);

module.exports = Album;

