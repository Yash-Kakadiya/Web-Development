// 3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using express

const fs = require('fs');
const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/about', (req, res) => {
    fs.readFile('about.txt', (err, data) => {
        res.send(data);
    });
})

app.get('/contact', (req, res) => {
    res.setHeader('Content-Type', "text/html")
    fs.readFile('contact.html', (err, data) => {
        res.send(data);
    });
})

app.listen(7000, () => {
    console.log("Server Listening");
})
