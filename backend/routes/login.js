const { Router } = require("express");
const router = new Router();
var jwt = require("jsonwebtoken");
const { getUserName } = require("../db/models/dbFunctions");
const { matchPassword } = require("../db/models/hashPassword");
const { v4: uuid4 } = require("uuid");

router.post("/", async (req, res) => {
  let body = req.body;
  let resObj = {
    succes: false,
  };
  console.log("body", body);

  const user = await getUserName(body);
  console.log("getUserName", user);
  const isMatch = await matchPassword(body.password, user.password);
  console.log("isMatch", isMatch);
  if (user && isMatch) {
    let token = jwt.sign({ uuid: user.uuid }, "secrets", { expiresIn: 200 });
    resObj.token = token;
    resObj.succes = true;
  }

  console.log("user login", resObj);

  res.send(JSON.stringify(resObj));
});

module.exports = router;
