const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, default: "No description available" },
    image: {
        filename: { type: String, default: "default-image.jpg" },
        url: { type: String, required: true }
    },
    price: { type: Number, required: true, min: 0 },
    location: { type: String, required: true },
    country: { type: String, required: true }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
