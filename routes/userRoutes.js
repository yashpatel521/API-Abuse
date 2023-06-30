const express = require("express");

const router = express.Router();

router.route("/login").post((req, res) => {
  const { email, password } = req.body;
  res.status(200).json({
    email: email,
    password: password,
  });
}); //api for login

module.exports = router;
