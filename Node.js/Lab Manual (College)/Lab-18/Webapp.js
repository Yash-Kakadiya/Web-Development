// 2. Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS.


const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log('server created');
    console.log(req.url);
    if (req.url == '/contact') {
        res.end('123456789');
    } else if (req.url == '/about') {
        res.end('Yash Kakadiya');
    } else if (req.url == '/home') {
        res.end('home');
    } else if (req.url == '/docs') {
        res.end('documentation');
    } else {
        res.end('hello');
    }
});

const port = 7000;

server.listen(port, () => {
    console.log('server listening');
});

