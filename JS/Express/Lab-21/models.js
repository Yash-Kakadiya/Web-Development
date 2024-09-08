const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        student_id: Number,
        student_name: String,
        age: Number,
        grade: String
    }
);
const Student = mongoose.model('Student', studentSchema);

const facultySchema = mongoose.Schema(
    {
        faculty_id: Number,
        faculty_name: String,
        department: String
    }
);
const Faculty = mongoose.model('Faculty', facultySchema);


const productSchema = mongoose.Schema(
    {
        product_id: Number,
        product_name: String,
        price: Number,
        quantity: Number
    }
);
const Product = mongoose.model('Product', productSchema);

module.exports = { Student, Faculty, Product };