// 3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using http core module

const fs = require('fs');

//server

const http = require('node:http');

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    if (req.url == '/contact') {
        fs.readFile('contact.html', (err, data) => {
            res.end(data);
        });
    } else if (req.url == '/about') {
        fs.readFile('about.html', (err, data) => {
            res.end(data);
        });
    } else {
        fs.readFile('home.html', (err, data) => {
            res.end(data);
        });
    }
});

const port = 7000;

server.listen(port, () => {
    console.log('server listening');
});
