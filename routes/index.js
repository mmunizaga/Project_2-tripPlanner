const express = require("express");
const router = express.Router();
const tripModel = require("./../models/Trip");
const myUnsplash = require("../config/unsplash");
const unsplash = require("unsplash-js");



router.get("/", (req, res) => {
  myUnsplash.search
    .photos("london", 1, 10, { orientation: "portrait" })
    .then(unsplash.toJson)
    .then(json => {
      console.log(json);
      res.render("home");
      // res.send(`<img src="${json.results[0].urls.full}" alt=""></img>`);
    });
});

module.exports = router;
