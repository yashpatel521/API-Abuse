const express = require("express");
const conn = require("../config");

const router = express.Router();

//api for login
router.route("/login").post((req, res) => {
  const { email, password } = req.body;

  const selectQuery = `SELECT * FROM user WHERE email='${email}' AND password='${password}'`;
  console.log(selectQuery);
  conn.query(selectQuery, function (err, result, fields) {
    if (err) res.status(400).send(err);
    if (result.length == 0) {
      res.status(200).json({
        status: false,
        message: "Invalid credentials",
        query: selectQuery,
      });
    } else {
      res.status(200).json({
        ...result[0],
        status: true,
        message: "login Successfull",
        query: selectQuery,
      });
    }
  });
});

module.exports = router;
