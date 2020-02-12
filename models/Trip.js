const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema ({
    userOwner: [{type:Schema.Types.ObjectId, ref:"User"}],
    title: {
        type: String,
        default: "My new trip",
        required: true
    },
    cityOrigin: {
        date: Date,
        city: String,
        country: String,
        transport_type: [String],
        transport_price: Number,
        transportUrl: [String]
    },
    cityToVisit: {
        date: Date,
        city: String,
        country: String,
        transport_type: [String],
        transport_price: Number,
        transportUrl: [String]
    },

    accommodations: {
        accommodations_url: String,
        accommodations_type: String,
        accommodations_price: Number,
        accommodations_address: {
            number: Number,
            street: String,
            street_type: String,
            city: String,
        },
    },
    notes: String,
    necessaryThings: [String],
    activities:[String],
    image: {
        type: String,
        default: "https://back-lastminute.orchestra-platform.com/admin/TS/fckUserFiles/Image/ORCHESTRA/MONDIAL_TOURISME/TURQUIE/SEALIFE_BUKET/NEW/Sea-life-buket-vue-result.jpg"
    }
});

const tripModel = mongoose.model("Trip", tripSchema);
module.exports = tripModel;