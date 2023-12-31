const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
});

// Sign-in route (validate credentials)
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      res.status(401).json({ error: "Invalid credentials" });
    } else {
      res.status(200).json({ message: "Sign-in successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Sign-in failed" });
  }
});

module.exports = router;
