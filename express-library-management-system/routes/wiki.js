// wiki.js - Wiki route module.

const express = require("express");
const router = express.Router();

// Home page route.


// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;
