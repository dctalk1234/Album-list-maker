const express = require("express");
const Album = require("../models/Album");
const User = require("../models/User");
const List = require("../models/List");
const router = express.Router();

router.delete('/:id', (req, res) => {
	User.findOneAndDelete({_id: req.params.id}).then(() => {
		res.redirect('/');
	})
})
router.post('/', (req, res) => {
	User.create(req.body).then(() => {
		res.redirect('/');
	});
})

router.put('/:id', (req, res) => {
	User.findOneAndUpdate({_id: req.params.id}, req.body).then(() => {
		res.redirect('/users');
	})
})

router.get('/new', (req, res) => {
	res.render('newUser');
})

router.get('/edit/:id', (req, res) => {
	User.findOne({_id: req.params.id}).then( user => {
		res.render('editUser', user);
	})
})
router.get('/:id', (req, res) => {
	return User.findOne({_id: req.params.id}).populate('lists').exec((err,user) =>{
		console.log(user);
		res.render('showUser', user);
	})
})
router.get("/", (req, res) => {
	User.find({}).then(users => {
		res.render("index", {users});
	});
});

module.exports = router;
