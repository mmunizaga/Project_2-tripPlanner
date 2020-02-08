const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transportSchema = new Schema ({
    transport: {
        type: String,
        enum: ["Bus","Boat","Car","Plane","Train"]
    },
    from: String,
    to: String,
    dateDepart: Date,
    dateArrive: Date,
    tickets: String,
    price: Number,
});

const transportModel = mongoose.model("Transport", transportSchema);
module.exports = transportModel;