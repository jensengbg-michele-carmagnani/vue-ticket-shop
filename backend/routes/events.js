const { Router } = require("express");
const router = new Router();
const cors = require('cors')

// data base access
const { db } = require("../db");

// routes
router.get("/", cors(), (req, res) => {
  let events = db.get("events").value();
  console.log(events);
  res.send({ events: events });
});

module.exports = router;
