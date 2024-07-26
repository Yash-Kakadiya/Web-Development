// 1. Create a hello world webapp using “http” core module in NodeJS.


const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log('server created');
    res.end('hello world');
});

const port = 7000;

server.listen(port, () => {
    console.log('server listening');
});

