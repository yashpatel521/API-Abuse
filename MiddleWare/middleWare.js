const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const context = ({ req }) => {
  const { authorization } = req.headers;
  if (authorization) {
    try {
      const { userId } = jwt.verify(authorization, JWT_SECRET);
      return { userId };
    } catch (error) {
      return error;
    }
  }
};

module.exports = context;
