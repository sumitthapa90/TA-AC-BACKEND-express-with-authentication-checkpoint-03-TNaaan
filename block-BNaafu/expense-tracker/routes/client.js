var express = require("express");

var router = express.Router();

router.get("/client", (req, res) => {
  res.render("client");
});

module.exports = router;
