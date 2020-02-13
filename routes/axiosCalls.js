const express = require("express");
const router = new express.Router();
const tripModel = require("./../models/Trip");
// const userModel = require("./../models/User");
const protectRoute = require("./../middlewares/protectRoute");
const moment = require("moment");

router.get("/preview-trip/:id", (req, res) => {
  tripModel
    .findById(req.params.id)
    // .populate("userOwner")
    .then(dbRes => {
      res.json(dbRes);
    })
    .catch(dbErr => console.log(dbErr));
});

module.exports = router;
