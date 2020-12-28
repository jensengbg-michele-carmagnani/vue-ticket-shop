const { Router } = require("express");
const router = new Router();
var jwt = require("jsonwebtoken");





router.get("/isloggedin", async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  console.log(typeof token);
  let resObj = {
    isLoggedIn: false,
  };

  if (token !== "null") {
    const user = jwt.verify(token, "secret");
    if (user) {
      resObj.isLoggedIn = true;
      resObj.user = user;
    }
  }

  res.send(JSON.stringify(resObj));
});

module.exports = router;
