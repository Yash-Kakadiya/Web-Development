// 1. Create a hello world webapp using ExpressJS.

const express = require("express");

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(7000, () => {
    console.log("Server Listening");
})