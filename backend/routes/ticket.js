const { Router } = require("express");
const router = new Router();
const { v4: uuid4 } = require("uuid");

const { db } = require("../db");

router.post("/", (req, res) => {
  let ticket = req.body;

  console.log("ticket to buy", ticket);
  let ticketNumber = db.get("tickets")
    .push({
      name: ticket.name,
      location: ticket.location,
      date: ticket.date,
      from: ticket.timeIn,
      to: ticket.timeOut,
      ticketNumber: uuid4(),
    })
    .write();

  console.log("ticketnumber", ticketNumber);
  res.send(JSON.stringify(ticketNumber));
});

module.exports = router;
