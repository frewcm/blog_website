const express = require("express");

const router = express.Router();

router.get("/api/frew", (req, res) => {
  res.send("frew is about to code up in here!");
});

module.exports = router;
