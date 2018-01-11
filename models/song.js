const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let newTrack =  ({
	name: String,
	trackNumber: Number
});

let Songs = mongoose.model('Songs', newTrack);

module.exports = Songs;