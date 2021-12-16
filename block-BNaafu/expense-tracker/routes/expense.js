var express = require("express");

var router = express.Router();

router.get("/expense", (req, res) => {
  res.render("expense");
});

module.exports = router;
