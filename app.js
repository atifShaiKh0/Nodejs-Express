const express = require('express');

// create express app

const app = express();

//Resgister view engine
app.set('view engine', 'ejs');
app.set('views', 'myview');

// listen for requests

app.listen(3000);

app.get('/', (req, res) => {
    // res.send();
    res.sendFile('./views/index.html', {root: __dirname}); 
});


app.get('/about', (req, res) => {
    // res.send();
    res.sendFile('./views/about.html', {root: __dirname}); 
});

//redirects
app.get('./about-us', (req, res) => {
    res.redirect('/about');
})

//404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname})
})