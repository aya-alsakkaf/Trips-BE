const express = require("express");
const userRouter = express.Router();
const {
  register,
  login,
  getAllUsers,
  getUserById,
  getUserTrips,
} = require("./users.controller");
const passport = require("passport");
const upload = require("../../middleware/multer");

userRouter.post("/register", upload.single("ProfilePicture"), register);
userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);
userRouter.get("/users", getAllUsers);
userRouter.get("/user/:_id", getUserById);
userRouter.get(
  "/user/:_id/trips",
  passport.authenticate("jwt", { session: false }),
  getUserTrips
);

module.exports = userRouter;
