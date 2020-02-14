const express = require("express");
const router = new express.Router();
const tripModel = require("./../models/Trip");
const protectRoute = require("./../middlewares/protectRoute");
const moment = require("moment");
const myUnsplash = require("../config/unsplash");
const unsplash = require("unsplash-js");

router.get("/all-trips", protectRoute, (req, res) => {
  tripModel.find({ userOwner: req.session.currentUser._id }).then(trips => {
    console.log("My trips are :");
    trips.forEach((trip, i) => console.log(i, ") ", trip.title));
    res.render("all-trips", {
      trips,
      scripts: ["trip-display.js"]
    });
  });
});

router.get("/create-a-trip", protectRoute, (req, res) => {
  res.render("forms/trip", {
    date: Date(Date.now()),
    scripts: ["countries_validation.js"]
  });
});

router.get("/my-trip/:id", protectRoute, (req, res) => {
  tripModel
    .findById(req.params.id)
    .then(trip => {
      res.render("my-trip", { trip });
    })
    .catch(error => console.log(error));
});

router.get("/my-trip/:id/delete", protectRoute, (req, res) => {
  tripModel
    .findByIdAndDelete(req.params.id)
    .then(trip => {
      console.log(
        trip.name ? " haven't been deleted" : "trip have been deleted"
      );
      res.redirect("/all-trips");
    })
    .catch(error => console.log(error));
});

router.get("/my-trip/:id/edit-my-trip", protectRoute, (req, res) => {
  tripModel
    .findById(req.params.id)
    .then(trip => {
      res.render("forms/edit-my-trip", {
        trip,
        scripts: ["countries_validation.js"]
      });
    })
    .catch(error => console.log(error));
});

router.post("/my-trip/:id/edit", protectRoute, (req, res) => {
  const trip_name = req.body.trip_name;
  const dateDepart = req.body.dateDepart;
  const dateArrive = req.body.dateArrive;
  const fromCity = req.body.fromCity;
  const toCity = req.body.toCity;
  const fromCountry = req.body.fromCountry;
  const toCountry = req.body.toCountry;
  const accommodations_type = req.body.type_accommodation;
  const accommodations_number = req.body.accommodations_number;
  const accommodations_street_type = req.body.accommodations_street_type;
  const accommodations_street = req.body.accommodations_street;
  const accommodations_city = req.body.accommodations_city;
  const accommodations_url = req.body.accommodations_url;
  const accommodations_price = req.body.accommodations_price;
  const activity = req.body.activity;
  const transport_type_go = req.body.transport_type_go;
  const transport_type_return = req.body.transport_type_return;
  const ticketUrl_return = req.body.ticketUrl_return;
  const ticket_price_return = req.body.ticket_price_return;
  const ticketUrl_go = req.body.ticketUrl_go;
  const ticket_price_go = req.body.ticket_price_go;
  const notes = req.body.notes;
  const necessaryThings = req.body.necessaryThings;
  // const image =
  // userOwner: [req.session.currentUser._id],
  const data = {
    title: trip_name,
    cityOrigin: {
      date: dateDepart,
      city: fromCity,
      country: fromCountry,
      transport_type: transport_type_go,
      transport_price: ticket_price_go,
      transportUrl: ticketUrl_go
    },
    cityToVisit: {
      date: dateArrive,
      city: toCity,
      country: toCountry,
      transport_type: transport_type_return,
      transport_price: ticket_price_return,
      transportUrl: ticketUrl_return
    },
    accommodations: {
      accommodations_url: accommodations_url,
      accommodations_type: accommodations_type,
      accommodations_price: accommodations_price,
      accommodations_address: {
        number: accommodations_number,
        street: accommodations_street,
        street_type: accommodations_street_type,
        city: accommodations_city
      }
    },
    activities: activity,
    notes,
    necessaryThings
    // image
  };


  myUnsplash.search
  .photos(toCountry, 1, 2, { orientation: "landscape" })
  .then(unsplash.toJson)
  .then(json => {
    data.image = [json.results[0].urls.thumb,json.results[1].urls.regular];
    // data.imageColor = [json.results[0].color,json.results[1].color];


  
  tripModel
    .findByIdAndUpdate(req.params.id, data)
    .then(trip => {
      res.redirect(`/all-trips`);
    })
    .catch(error => console.log(error));
});
});

router.post("/create-a-trip", protectRoute, (req, res, next) => {
  const trip_name = req.body.trip_name;
  const dateDepart = req.body.dateDepart;
  const dateArrive = req.body.dateArrive;
  const fromCity = req.body.fromCity;
  const toCity = req.body.toCity;
  const fromCountry = req.body.fromCountry;
  const toCountry = req.body.toCountry;
  const accommodations_type = req.body.type_accommodation;
  const accommodations_number = req.body.accommodations_number;
  const accommodations_street_type = req.body.accommodations_street_type;
  const accommodations_street = req.body.accommodations_street;
  const accommodations_city = req.body.accommodations_city;
  const accommodations_url = req.body.accommodations_url;
  const accommodations_price = req.body.accommodations_price;
  const activity = req.body.activity;
  const transport_type_go = req.body.transport_type_go;
  const transport_type_return = req.body.transport_type_return;
  const ticketUrl_return = req.body.ticketUrl_return;
  const ticket_price_return = req.body.ticket_price_return;
  const ticketUrl_go = req.body.ticketUrl_go;
  const ticket_price_go = req.body.ticket_price_go;
  const notes = req.body.notes;
  const necessaryThings = req.body.necessaryThings;
console.log(transport_type_go);

  const data = {
    userOwner: [req.session.currentUser._id],
    title: trip_name,
    cityOrigin: {
      date: dateDepart,
      city: fromCity,
      country: fromCountry,
      transport_type: transport_type_go,
      transport_price: ticket_price_go,
      transportUrl: ticketUrl_go
    },
    cityToVisit: {
      date: dateArrive,
      city: toCity,
      country: toCountry,
      transport_type: transport_type_return,
      transport_price: ticket_price_return,
      transportUrl: ticketUrl_return
    },
    accommodations: {
      accommodations_url: accommodations_url,
      accommodations_type: accommodations_type,
      accommodations_price: accommodations_price,
      accommodations_address: {
        number: accommodations_number,
        street: accommodations_street,
        street_type: accommodations_street_type,
        city: accommodations_city
      }
    },
    activities: activity,
    notes,
    necessaryThings
  };

  myUnsplash.search
    .photos(toCountry, 1, 2, { orientation: "landscape" })
    .then(unsplash.toJson)
    .then(json => {
      data.image = [json.results[0].urls.thumb,json.results[1].urls.regular];
      data.imageColor = [json.results[0].color,json.results[1].color];
      

      tripModel
        .create(data)
        .then(() => {
          console.log(trip_name, " have been created");
          res.redirect("/all-trips");
        })
        .catch(error => {
          console.log(
            ">>>>>>>>>>>>>>>>>>>>No new trip have been created<<<<<<<<<<<<<<<<<<<<<<<<<<<<",
            error
          );
        });

      // res.send(`<img src="${json.results[0].urls.regular}" alt=""></img>`);
    });
});

module.exports = router;
