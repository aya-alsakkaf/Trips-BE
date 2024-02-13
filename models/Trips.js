const mongoose = require("mongoose");

const TripsSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
//   date: String,
//   location: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Trips", TripsSchema);
