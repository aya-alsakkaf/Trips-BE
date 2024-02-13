const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  bio: String,
  image: String,
  trips: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trips",
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
