const express = require('express');

// express app
const app = express();

//register view engine 
app.set('view engine', 'ejs');

// listen for requests
app.listen(2010);

app.get('/', (req, res) => {
    res.render('zindex');
});

app.get('/about', (req, res) => { 
    res.render('zabout');
});



// 404 page
app.use((req, res) => {
    res.status(404).render('z404');
})
