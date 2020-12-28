router.get("/logout", (req, res) => {
  let resObj = {
    success: true,
  };

  res.clearCookie("loggedIn");
  res.send(JSON.stringify(resObj));
});
