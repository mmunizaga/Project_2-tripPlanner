const express = require("express");
const router = express.Router();
const tripModel = require("./../models/Trip");
const myUnsplash = require("../config/unsplash");
const unsplash = require("unsplash-js");



router.get("/", (req, res) => {

const myUnsplash = require("../config/unsplash");

  myUnsplash.search
    .photos("canada", 1, 10, { orientation: "landscape" })
    .then(unsplash.toJson)
    .then(json => {
      console.log(json);
      // res.send(json.results[0].urls.regular);
      res.render("home");
    });
});

module.exports = router;
