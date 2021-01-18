const { Router } = require("express");
const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "services.html"));
});

module.exports = router;
