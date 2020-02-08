const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transportSchema = new Schema ({
    transport: {
        type: String,
        enum: ["Bus","Boat","Bike","Car","Motorcycle","Plane","Train"]
    },
    from: {
        city: String,
        country: String
    },
    to: {
        city: String,
        country: String
    },
    dateDepart: {
        hour: String,
        date: Date
    },
    dateArrive: {
        hour: String,
        date: Date
    },
    ticketsUrl: String,
    price: Number,
    notes:{
        type:[String]
    }
});

const transportModel = mongoose.model("Transport", transportSchema);
module.exports = transportModel;