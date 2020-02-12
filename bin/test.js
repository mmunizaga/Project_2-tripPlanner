require("dotenv").config();
const moment = require("moment");
require("../config/mongodb");
const tripModel = require("../models/Trip");

(async () => {
  try {
    const trip = await tripModel.findOne();
    const date = trip.cityOrigin.date;
    const formattedDate = moment(date).format("YYYY-MM-DD[T]HH:MM");
    console.log(formattedDate);
  } catch (err) {
    console.log(err);
  }
})();
