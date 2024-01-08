const mongoose = require("mongoose");

const url = process.env.MONGOOSE_KEY;

function connect() {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongoose connected !");
    })
    .catch(() => {
      console.log("Check Mongoose URL !");
    });
}

module.exports = connect;
