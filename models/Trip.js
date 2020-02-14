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
        type: [String],
        default: ["https://back-lastminute.orchestra-platform.com/admin/TS/fckUserFiles/Image/ORCHESTRA/MONDIAL_TOURISME/TURQUIE/SEALIFE_BUKET/NEW/Sea-life-buket-vue-result.jpg","https://images.unsplash.com/photo-1580993123109-63aea48b2807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80"]
    },
    imageColor: [String],
});

const tripModel = mongoose.model("Trip", tripSchema);
module.exports = tripModel;


