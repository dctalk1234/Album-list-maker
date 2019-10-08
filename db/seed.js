const Album = require("../models/Album");
const User = require("../models/User");
const List = require("../models/List");


// User.deleteMany({}).then(() => {
// 	List.deleteMany({}).then(() => {
// 		Album.deleteMany({}).then(() => {
// 			process.exit();
// 		})
// 	})
// })

User.deleteMany({}).then(() => {
	List.deleteMany({}).then(() => {
		Album.deleteMany({}).then(() => {
			 User.create({
				name: "Nathaniel",
				favGenre: "hard rock"
			 })
			 .then(nathaniel => {
		
				 Album.create({
					name: "Awake",
					artist: "Skillet",
				}).then(rise => {
					
					 List.create({
						name: "fav albums",
					}).then(favAlbums => {
				
						favAlbums.albums.push(rise);
						favAlbums.save();
						nathaniel.lists.push(favAlbums);
						nathaniel.save();
						console.log("created nathaniel with one list with one album");
					});
				});
			});
		});
	});
});

// User.remove({}).then(() => {
// 	return User.insertMany(userSeed).then(() => {
// 		process.exit();
// 	});
// });
