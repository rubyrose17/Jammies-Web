const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String, // You should hash and salt the password
});

const User = mongoose.model("User", userSchema);

module.exports = User;
