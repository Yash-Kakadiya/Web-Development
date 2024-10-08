const Listing = require("../models/listing");

const getListings = async (req, res) => {
    //GetAllListings
    const data = await Listing.find();
    res.send(data);
}

const getListingsById = async (req, res) => {
    //GetListingById
    const { id } = req.params;
    const data = await Listing.findById(id);
    res.send(data);
}

const addListing = async (req, res) => {
    //CreateListing
    const listing = new Listing({ ...req.body });
    const data = await listing.save();
    res.send(data);
}

const editListing = async (req, res) => {
    //UpdateListing
    const { id } = req.params;
    const listing = { ...req.body };
    const data = await Listing.findByIdAndUpdate(id, listing);
    res.send(data);
}

const deleteListing = async (req, res) => {
    //DeleteListing
    const { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    res.send("Deleted");
    console.log('Deleted Listing: ', deletedListing);
}

module.exports = { getListings, getListingsById, addListing, editListing, deleteListing };