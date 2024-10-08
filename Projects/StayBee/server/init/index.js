const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


async function initDB() {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data initialized");
};

mongoose.connect('mongodb+srv://yashkakadiya931:yashkakadiya931@cluster0.welde.mongodb.net/staybee')
    .then(() => {
        console.log('Connected to MongoDB');
        initDB();
    });
