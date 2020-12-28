const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { v4: uuidv4 } = require("uuid");
app.use(bodyParser.json());

// Routes
const eventsRoute = require("./routes/events");
const ticketRoute = require("./routes/ticket");
const loginRoute = require("./routes/login");
const isloggedin = require("./routes/isLoggedin");
const { hashPassword, matchPassword } = require("./db/models/hashPassword");

//corse
app.use(cors());
// route events
app.use("/events", eventsRoute);
// route to buy ticket
app.use("/ticket", ticketRoute);
// route to login
app.use("/login", loginRoute);
// route isLoggin
app.use("/isLoggedin", isloggedin);

// Created uuid and hashed the password for the 2 users

// async function getPass() {
//   const myPlaintextPassword = "pwd123!";
//   console.log(myPlaintextPassword);
//   const hash = await hashPassword(myPlaintextPassword);
//   console.log("Hash: ", hash);
//   const match = await matchPassword(myPlaintextPassword, hash);
//   console.log("Password match: ", match);
// }
// const uuid = uuidv4();
// function createUuid(uuid) {
//   console.log("uuid", uuid);
// }
// getPass();
// createUuid(uuid);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running at port : ${port}`);
});
