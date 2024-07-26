// 3. Demonstrate “fs” core module in NodeJS.

const fs = require('fs');

fs.exists('/path/to/file', (exists) => {
    console.log(exists ? 'Found' : 'Not Found!');
});

fs.stat('node.js', (err, data) => {
    console.log(data);
});

//write
fs.writeFile('abc.txt', 'content', (err) => {
    if (err) {
        console.log(err);
    }
});

//append
fs.appendFile('abc.txt', ' | append content', (err) => {
    if (err) {
        console.error(err);
    }
});

//copy
fs.readFile('abc.txt', (err, data) => {
    console.log(data.toString());
    fs.writeFile('abcCopy.txt', data, (err) => {
        if (err) {
            console.log(err);
        }
    });
});

//rename
fs.rename('abc.txt', 'abc2.txt', (err) => {
    if (err) {
        console.error(err);
    }
});
