const Trips = require("../../models/Trips");
const User = require("../../models/User");

const createTrip = async (req, res, next) => {
  try {
    const { user } = req.body;
    if (req.file) req.body.image = req.file.path;
    const newTrip = await Trips.create(req.body);
    const userFound = await User.findById(user);
    await userFound.updateOne({ $push: { trips: newTrip._id } });
    return res.status(201).json(newTrip);
  } catch (err) {
    next(err);
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
};
