const express = require("express");
const router = express.Router();
const tripModel = require("./../models/Trip");


router.get("/", (req, res) => {
    res.render("home");
  });

  module.exports = router;