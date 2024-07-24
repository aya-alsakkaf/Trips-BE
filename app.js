//imports
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./database");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
const passport = require("passport");
const cors = require("cors");
const userRouter = require("./api/users/users.routes");
const tripRouter = require("./api/trips/trips.routes");
const path = require("path");
//init
const app = express();
const PORT = 8001;
app.use(express.json());
connectDB();

//middleware
app.use(morgan("dev"));
app.use(cors());

//Routers
app.use(userRouter);
app.use(tripRouter);

app.use(passport.initialize());
passport.use("local", localStrategy);
passport.use("jwt", jwtStrategy);

app.use("/media", express.static(path.join(__dirname, "media")));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
