var express = require("express");

var router = express.Router();

router.get("/income", (req, res) => {
  res.render("income");
});

module.exports = router;
