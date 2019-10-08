const express = require("express");
const Album = require("../models/Album");
const User = require("../models/User");
const List = require("../models/List");
const router = express.Router();


router.delete('/:id', (req, res) => {
    Album.findOneAndRemove({_id: req.params.id}).then(() => {
        res.redirect('/');
    })
})
router.post('/:listID', (req, res) => {
    Album.create(req.body).then(newAlbum => {
        List.findOne({_id: req.params.listID}).then(list => {
            list.albums.push(newAlbum);
            list.save();
            res.redirect(`/`);
        })
    })
})

router.put('/:id', (req, res) => {
    Album.findOneAndUpdate({_id: req.params.id}, req.body).then(() => {
        res.redirect(`/albums/${req.params.id}`);
    })
})


router.get('/:listID/new', (req, res) => {
    List.findOne({_id: req.params.listID}).then(list => {
        res.render('newAlbum', list);
    })
})

router.get('/edit/:id', (req, res) => {
    Album.findOne({_id: req.params.id}).then(album => {
        res.render('editAlbum', album);
    })
})
router.get('/:id', (req, res) => {
    Album.findOne({_id: req.params.id}).then(album => {
        res.render('showAlbum', album);
    })
})

module.exports = router;