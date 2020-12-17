const { Router } = require("express");
const router = new Router();
const { v4: uuid4 } = require("uuid");

const { db } = require("../db");

function createData() {
  return new Date().toISOString().slice(0, 10);
}

router.post("/", (req, res) => {
  let ticket = req.body;

  console.log("ticket to buy", ticket);
  let serialNumber = uuid4();
  db.get("tickets")
    .push({
      name: ticket.name,
      location: ticket.location,
      date: ticket.date,
      from: ticket.timeIn,
      to: ticket.timeOut,
      price: ticket.price,
      data: createData(),
      ticketNumber: serialNumber,
    })
    .write();
  let soldTicket = db.get("tickets").find({ ticketNumber: serialNumber });

  console.log("ticketnumber", JSON.stringify(soldTicket));
  res.send(JSON.stringify(soldTicket));
});

module.exports = router;
