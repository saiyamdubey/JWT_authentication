const jwt = require("jsonwebtoken");

const secret = process.env.SECRET_KEY;

function settokeen(user) {
  try {
    const token = jwt.sign(
      {
        ...user,
      },
      secret
    );
    return token;
  } catch (error) {
    return null;
  }
}
module.exports = settokeen;
