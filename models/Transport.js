const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transportSchema = new Schema ({
    transport: {
        type: String,
        enum: ["Bus","Boat","Bike","Car","Motorcycle","Plane","Train"]
    },
    idStep: [{type: Schema.Types.ObjectId, ref:"tripStep"}],
    from: {
        city: String,
        country: String
    },
    to: {
        city: String,
        country: String
    },
    dateDepart: Date,
    dateArrive: Date,
    ticketsUrl: String,
    price: Number,
    notes:{
        type:[String]
    }
});

const transportModel = mongoose.model("Transport", transportSchema);
module.exports = transportModel;