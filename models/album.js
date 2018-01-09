const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let NewAlbum = ({
    artistName: String,
    name: String,
    releaseDate: String,
    genres: [ String ]
});

let Album = mongoose.model('Album', NewAlbum);

module.exports = Album;

