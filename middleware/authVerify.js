const jwt = require("jsonwebtoken");

const secret = process.env.SECRET_KEY;

function authverify(token) {
  return jwt.verify(token, secret);
}

module.exports = authverify;
