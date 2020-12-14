const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuid4 } = require("uuid");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());

// Routes
const eventsRoute = require("./routes/events");
const ticketRoute = require("./routes/ticket");

//corse
app.use(cors());
// route events
app.use("/events", eventsRoute);
// route to buy ticket
app.use("/ticket", ticketRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running at port : ${port}`);
});
