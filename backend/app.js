const express = require("express");
const colors = require("colors");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const userRoute = require("./routes/user");
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB".underline.cyan);
});

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api", userRoute);
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on ${port}`.underline.cyan);
});
