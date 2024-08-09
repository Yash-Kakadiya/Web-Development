const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Root path');
});

app.get('/contact', (req, res) => {
    res.send('Contact page');
});

app.get('/about/:id', (req, res) => {
    const id = req.params.id;
    res.send('About page, id: ' + id);
});

app.get('/search', (req, res) => {
    const { q, id } = req.query;
    res.send(`<h1>search for ${q}, ${id} </h1>`);
});

app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

app.use((req, res) => {    //listens every request
    console.log('app.use');
    res.send('app.use');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
