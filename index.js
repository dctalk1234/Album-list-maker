const express = require('express');
const parser = require('body-parser');
const app = express();
const methodOverride = require('method-override');


app.use(parser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.set('view engine', 'hbs');

const userController = require('./controllers/user');
app.use('/users', userController);

app.listen(3000, () => {
    console.log('we live on 3000');
})