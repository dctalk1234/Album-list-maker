const express = require('express');
const parser = require('body-parser');
const app = express();
const methodOverride = require('method-override');


app.use(parser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.set('view engine', 'hbs');

const userController = require('./controllers/user');
app.use('/users', userController);

const albumController = require('./controllers/album');
app.use('/albums', albumController);

const listController = require('./controllers/list');
app.use('/list', listController);

app.get('/', (req, res) => {
    res.redirect('/users');
})
app.listen(3000, () => {
    console.log('we live on 3000');
})