const express = require("express");
const router = new express.Router();
const tripModel = require("./../models/Trip");
const protectRoute = require("./../middlewares/protectRoute");
const moment = require("moment");

router.get("/preview-trip:id", (req, res) => {
    tripModel
    .findById(req.params.id)
    .then((dbRes) => {
        res.json(dbRes);
        console.log(dbRes);
    })
    .catch((dbErr) => console.log(dbErr));
})

module.exports = router;