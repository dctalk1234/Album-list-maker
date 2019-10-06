const Album = require("../models/Album");
const User = require("../models/User");

const albumSeed = require("./albums.json");
const userSeed = require("./user.json");

Album.remove({}).then(() => {
	return Album.insertMany(albumSeed).then(() => {
		console.log("WE GOT ALBUM DATA");
		process.exit();
	});
});

User.remove({}).then(() => {
	return User.insertMany(userSeed).then(() => {
		console.log("WE GOT USER DATA");
		process.exit();
	});
});
