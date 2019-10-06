const mongoose = require('mongoose');



mongoose.connect("mongodb://localhost/albumlist", { useNewUrlParser: true }, () => {
	console.log("We connected!!!");
});

mongoose.Promise = Promise;

module.exports = mongoose;