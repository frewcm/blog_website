const express = require("express");
const userRoute = require("./routes/UserRoute.js");
const authRoute = require("./routes/AuthRoute.js");
const connectDB = require("./config/db.js");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(morgan("common"));

app.use(userRoute);
app.use(authRoute);

app.listen(5000, () => {
  console.log("server started on port: 5000");
});
