const { Router } = require("express");
const router = new Router();

router.get('/', (req, res) => {
  let user = req.body
  console.log('user login', user)
  res.send(console.log('ciao' ))
})

module.exports = router;