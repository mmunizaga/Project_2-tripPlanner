const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accommodationSchema = new Schema ({
    name: String,
    place: String,
    checkIn: Date,
    checkOut: Date,
    price: Number,
    address: {
        number: Number,
        street: String,
        city: String,
        country: String,
    },
});

const accommodationModel = mongoose.model("Accommodation", accommodationSchema);
module.exports = accommodationModel;