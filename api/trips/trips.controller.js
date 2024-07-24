const Trips = require("../../models/Trips");
const User = require("../../models/User");

const createTrip = async (req, res, next) => {
  try {
    if (req.file) req.body.image = req.file.path;
    req.body.user = req.user._id;
    const newTrip = await Trips.create(req.body);
    const userFound = await User.findById(req.user._id);
    await userFound.updateOne({ $push: { trips: newTrip._id } });
    return res.status(201).json(newTrip);
  } catch (err) {
    next(err);
  }
};

const getAllTrips = async (req, res, next) => {
  try {
    const trips = await Trips.find().populate("user");
    return res.status(200).json(trips);
  } catch (error) {
    next(error);
  }
};

const getTripByID = async (req, res, next) => {
  try {
    const trip = await Trips.findById(req.params._id);
    return res.status(200).json(trip);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTrip,
  getTripByID,
  getAllTrips,
};
