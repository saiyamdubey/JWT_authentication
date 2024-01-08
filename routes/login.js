const express = require("express");
const User = require("../models/usermodel");
const settoken = require("../services/authentication");

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await User.findOne({ username, password });

  try {
    if (foundUser) {
      const token = await settoken(foundUser);
      res.cookie("token", token, { maxAge: "900000" });
      // token will deleted in 15 minutes so do it fast birooo
    }
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = router;
