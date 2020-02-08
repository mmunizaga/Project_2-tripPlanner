const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema ({
    title: {
        type: String,
        default: "My new trip",
        required: true
    },
    userOwner: {
        type: Schema.User.ObjectId,
        ref: "user",
        required: true
    },
    tripCompanions: {
        type: [Schema.User.ObjectId],
        ref: "companions"
    },
    transports: {
        type: [Schema.Transport.ObjectId],
        ref: "transports"
    },
    accommodations: {
        type:[Schema.Accommodation.ObjectId],
        ref: "accommodations"
    },
    places:{
        type:[Schema.Places.ObjectId],
        ref: "places"
    },
    necessaryDocuments:{
        type:[String]
    },
    notes:{
        type:[String]
    }
});

const tripModel = mongoose.model("Trip", tripSchema);
module.exports = tripModel;