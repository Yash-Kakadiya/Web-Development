const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

// app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views')); // to run server from any directory

app.get('/', (req, res) => {
    res.render('home.ejs');  // .ejs is optional
});

app.get('/hello', (req, res) => {
    res.send('hello');
});

app.get('/rolldice', (req, res) => {
    let num = Math.floor(Math.random() * 6) + 1;

    // app.render('rollDice',{num : num});
    res.render('rollDice.ejs', { num })
});

app.get('/facebook/:username', (req, res) => {
    const followers = ['yash', 'abc', 'xyz'];
    const { username } = req.params;

    res.render('facebook.ejs', { username, followers }) //.ejs is optional
});

//Server static files
// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public'))); //to run from any directory

app.get('/instagram/:username', (req, res) => {
    const { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if (data) {
        res.render('instagram.ejs', { data });
    } else {
        res.render('error.ejs',{username});
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
