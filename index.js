const express = require('express');
const parser = require('body-parser');
const app = express();
const methodOverride = require('method-override');
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));


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
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});