const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

class Token {
  async generateToken(user) {
    return jwt.sign(user, JWT_SECRET);
  }
  async validateToken(token) {
    return jwt.verify(token, JWT_SECRET);
  }
}

module.exports = new Token();
