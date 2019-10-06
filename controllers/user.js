const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/", (req, res) => {
	User.find({}).then(users => {
		res.render("index", {users});
	});
});

module.exports = router;
