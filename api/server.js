const express = require("express");
const userRoute = require("./routes/UserRoute.js");
const authRoute = require("./routes/AuthRoute.js");
const postRoute = require("./routes/PostRoute.js");
const catagoriesRoute = require("./routes/CatagoriesRoute.js");
const connectDB = require("./config/db.js");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const multer = require("multer");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("common"));

//image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "hello.jpeg");
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
});

app.use(userRoute);
app.use(authRoute);
app.use(postRoute);
app.use(catagoriesRoute);

app.listen(5000, () => {
  console.log("server started on port: 5000");
});
