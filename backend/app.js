const express = require("express");
const colors = require("colors");

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use("/", (req, res) => {
  res.send("Hello, World!");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on ${port}`.underline.cyan);
});
