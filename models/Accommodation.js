const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accommodationSchema = new Schema ({
    name: String,
    place: String,
    checkIn: {
        hour: String,
        date: Date
    },
    checkOut: {
        hour: String,
        date: Date
    },
    price: Number,
    contact: {
        telephone: Number,
        email: String,
    },
    address: {
        number: Number,
        street: String,
        city: String,
        country: String,
    },
    notes:{
        type:[String]
    }
});

const accommodationModel = mongoose.model("Accommodation", accommodationSchema);
module.exports = accommodationModel;