const express = require("express");
const tripRouter = express.Router();
const { createTrip, getTripByID} = require("./trips.controller");
const passport = require("passport");
const upload = require("../../middleware/multer");

tripRouter.post("/", upload.single("TripPicture"), createTrip);
tripRouter.get("/:_id", getTripByID);


module.exports = tripRouter;
