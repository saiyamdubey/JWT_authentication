const express = require("express");
const authverify = require("../middleware/authVerify");

const router = express.Router();

router.post("/", (req, res) => {
  try {
    if (!authverify(req.cookies["token"])) {
      res.status(200).send("permission nah hai bhai tumko !!");
    }
    res.status(200).send("permission hai bhai ko , Salam bhai !!");
  } catch (error) {
    res.status(401).send("Some error occured");
  }
});

module.exports = router;
