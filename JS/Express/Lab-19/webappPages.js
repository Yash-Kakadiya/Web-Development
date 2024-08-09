// 2. Create a webapp with 5 pages like about, contact etc.. using ExpressJS.

const express = require("express");

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/home', (req, res) => {
    res.send('Hello home');
})

app.get('/about', (req, res) => {
    res.send('Hello about');
})

app.get('/contact', (req, res) => {
    res.send('Hello contact');
})

app.post('/profile', (req, res) => {
    res.send('Hello profile post');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})