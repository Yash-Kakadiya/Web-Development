const mongoose = require('mongoose');

const stuSchema = mongoose.Schema(
    {
        rollno: Number,
        name: String,
        age: Number
    }
);
const Student = mongoose.model('Student', stuSchema);

module.exports = Student;