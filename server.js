const express = require("express");
require("dotenv").config();
const cors = require("cors");
const signup = require("./routes/signup");
const cookieParser = require("cookie-parser");
const login = require("./routes/login");
const verifyiedornot = require("./routes/permissions");
const connect = require("./services/connectdb");

const port = process.env.PORT || 8000;
const app = express();

connect();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/signup", signup);
app.use("/login", login);
app.use("/verify", verifyiedornot);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
