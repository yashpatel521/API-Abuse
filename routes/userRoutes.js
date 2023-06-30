const express = require("express");
const conn = require("../config");

const router = express.Router();

router.route("/login").post((req, res) => {
  const { email, password } = req.body;
  const selectQuery =
    `SELECT * FROM user WHERE email='` +
    email +
    `' AND password='` +
    password +
    `'`;
  console.log(selectQuery);
  conn.query(selectQuery, function (err, result, fields) {
    if (err) res.status(400).send(err);
    if (result.length == 0) {
      res.status(400).json({
        message: "Invalid credentials",
      });
    } else {
      res.status(200).json({
        ...result[0],
        message: "login Successfull",
      });
    }
  });
}); //api for login

module.exports = router;
