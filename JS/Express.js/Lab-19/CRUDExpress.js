
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let students = [];

// CREATE: Add a new student
app.post('/students', (req, res) => {
    const { name } = req.body;
    students.push(name);
    res.send(students);
});

// READ: Get all students
app.get('/students', (req, res) => {
    res.send(students);
});

// UPDATE: Update a student's details
app.put('/students/:id', (req, res) => {
    const id = req.params.id;
    const { name } = req.body;
    students[id] = name;
    res.send(students);
});

// DELETE: Remove a student
app.delete('/students/:id', (req, res) => {
    const id = req.params.id;
    students.splice(id, 1);
    res.send(students);
});

app.listen(port, () => {
    console.log('Server running on http://localhost : ' + port);
});
