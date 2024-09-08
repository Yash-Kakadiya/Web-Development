const express = require('express');
const app = express();

const mongoose = require('mongoose');

const { Student, Faculty, Product } = require('./models');

const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('dotenv').config();

let port = process.env.port;

mongoose.connect('mongodb+srv://yashkakadiya931:yashkakadiya931@cluster0.welde.mongodb.net/lab')
    .then(() => {
        console.log("Database connected");

        //GetAllX
        app.get("/students", async (req, res) => {
            const data = await Student.find();
            console.log(data);
            res.send(data)

        });

        //GetXById
        app.get("/students/:id", async (req, res) => {
            const data = await Student.findOne({ rollno: req.params.id });
            console.log(data);
            res.send(data)

        })

        //CreateX
        app.post("/students", async (req, res) => {
            stu = new Student({ ...req.body });
            const ans = await stu.save();
            res.send(ans);
        });

        //UpdateX
        app.patch("/students/:id", async (req, res) => {
            let id = req.params.id;
            let data = req.body;
            let stu = await Student.findByIdAndUpdate(id, data);
            res.send(data);
        })

        //DeleteX
        app.delete("/students/:id", async (req, res) => {
            let stu = await Student.deleteOne({ student_id: req.params.id });
            res.send("Deleted");
        })

        app.listen(port, () => {
            console.log(`server listening on port ${port}...`);
        })
    });
