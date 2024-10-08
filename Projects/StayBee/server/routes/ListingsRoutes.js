const express = require('express');
const { getListings, getListingsById, addListing, editListing, deleteListing } = require("../controllers/ListingAPI");

const router = express.Router();

router.get("/", getListings);
router.get("/listings", getListings);
router.get("/listings/:id", getListingsById);
router.post("/listings/add", addListing);
router.patch("/listings/edit/:id", editListing);
router.delete("/listings/delete/:id", deleteListing);

module.exports = router;