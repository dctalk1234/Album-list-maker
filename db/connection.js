const mongoose = require("mongoose");

let mongoURI = "mongodb://localhost/albumlist";

if (process.env.NODE_ENV === "production") {
	mongoURI = process.env.DB_URL;
} else {
	mongoURI = "mongodb://localhost/albumlist";
}

mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
	console.log("We connected!!!");
});

mongoose.Promise = Promise;

module.exports = mongoose;
