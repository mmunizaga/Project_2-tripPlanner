const express = require("express");
const router = new express.Router();
const tripModel = require("./../models/Trip");
const protectRoute = require("./../middlewares/protectRoute");

router.get("/tripPage", protectRoute, (req, res) => {
    res.render("signin_trips_page");
  });

router.get("/create-a-trip", (req, res) => {
    res.render("forms/trip");
  });
  
router.post("/create-a-trip", (req, res) => {
    const trip_name = req.body.trip_name;
    const dateDepart = req.body.dateDepart;
    const dateArrive = req.body.dateArrive;
    const fromCity = req.body.fromCity;
    const toCity = req.body.toCity;
    const fromCountry = req.body.fromCountry;
    const toCountry = req.body.toCountry;
    const accommodations_type = req.body.accommodations_type;
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


    const data = {
      "title": trip_name,
      "cityOrigin": {"date": dateDepart,
      "city": fromCity,
      "country": fromCountry,
      "transport_type": transport_type_go,
      "transptransport_typeort_price": ticket_price_go,
      "transportUrl": ticketUrl_go
    },
    "cityToVisit": {
      "date": dateArrive,
      "city": toCity,
      "country": toCountry,
      "transport_type": transport_type_return,
      "transport_price": ticket_price_return,
      "transportUrl": ticketUrl_return
  },
  "accommodations": {
    "accommodations_url": accommodations_url,
    "accommodations_type": accommodations_type,
    "accommodations_price": accommodations_price,
    "accommodations_address": {
        "number": accommodations_number,
        "street": accommodations_street,
        "street_type": accommodations_street_type,
        "city": accommodations_city,
    },
  },
  "activities": activity,
}
    //"necessaryDocuments": ticketUrl,
    console.log(data);

    tripModel.create(data)
  .then(() => {
      res.redirect("/");
  })
  .catch(error => {
      console.log(">>>>>>>>>>>>>>>>>>>>No new trip have been created<<<<<<<<<<<<<<<<<<<<<<<<<<<<",error);
  })
  });






module.exports = router;