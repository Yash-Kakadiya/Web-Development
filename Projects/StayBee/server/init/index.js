const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


async function initDB() {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data initialized");
};

require('dotenv').config({ path: '../.env' });
const mongoURL = process.env.mongoURL;

mongoose.connect(mongoURL)
    .then(() => {
        console.log('Connected to MongoDB');
        initDB();
    });
