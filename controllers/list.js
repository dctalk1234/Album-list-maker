const express = require('express');
const Album = require("../models/Album");
const User = require("../models/User");
const List = require("../models/List");
const router = express.Router();

router.delete('/:id', (req, res) => {
    List.remove({_id: req.params.id}).then(() =>{
        res.redirect('/');
    })
})
router.post('/:userID', (req, res) => {
    List.create(req.body).then(newlist => {
        User.findOne({_id: req.params.userID}).then(user => {
            user.lists.push(newlist);
            user.save();
            res.redirect(`/users/${req.params.userID}`);
        })
    })
})

router.put('/:id', (req, res) => {
    List.findOneAndUpdate({_id: req.params.id}, req.body).then(() => {
        res.redirect('/');
    })
})

router.get('/edit/:id', (req, res) => {
    List.findOne({_id: req.params.id}).then(list => {
        res.render('editList', list);
    })
})

router.get('/:userID/new', (req, res) => {
    User.findOne({_id: req.params.userID}).then(user => {
        res.render('newList', user);
    })
})

router.get('/:userID/:id', (req, res) => {
    List.findOne({_id: req.params.id}).populate('albums').exec((err, list) => {
        res.render('showList', list);
    })
})

module.exports = router;