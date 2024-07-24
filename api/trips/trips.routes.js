const express = require("express");
const tripRouter = express.Router();
const { createTrip, getTripByID, getAllTrips } = require("./trips.controller");
const passport = require("passport");
const upload = require("../../middleware/multer");

tripRouter.post(
  "/",
  upload.single("image"),
  passport.authenticate("jwt", { session: false }),
  createTrip
);
tripRouter.get("/allTrips", getAllTrips);
tripRouter.get("/:_id", getTripByID);

module.exports = tripRouter;
