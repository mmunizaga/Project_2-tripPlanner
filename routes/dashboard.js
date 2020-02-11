const express = require("express");
const router = new express.Router();
const tripModel = require("./../models/Trip");
const protectRoute = require("./../middlewares/protectRoute");

router.get("/tripPage", protectRoute, (req, res) => {
    res.render("signin_trips_page");
  });



module.exports = router;