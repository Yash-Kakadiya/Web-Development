const express = require('express');
const mongoose = require('mongoose');
const ListingRoutes = require('./routes/ListingsRoutes.js')
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/staybee', ListingRoutes);


require('dotenv').config();

const port = process.env.port || 3001;
const mongoURl = process.env.mongoURl;

mongoose.connect(mongoURl)
    .then(() => {
        console.log('Connected to MongoDB');

        app.listen(port, () => {
            console.log(`server listening on ${port}`);
        });
    });