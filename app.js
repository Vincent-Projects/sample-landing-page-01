const express = require('express');
const path = require('path');


const app = express();

app.set("view engine", "ejs");
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render('index');
});

app.use((req, res, next) => {
    res.redirect('/');
});

app.listen(PORT || 3000);