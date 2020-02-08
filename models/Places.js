const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placesSchema = new Schema ({
    name: String,
    country: String,
    toursAndActivities = new Schema ({
        title: String,
        dateAndHour: Date,
        description: String,
        ranking: {
            type: Number,
            enum: [0, 1, 2, 3, 4, 5]
        }
    })
});

const placesModel = mongoose.model("Places", placesSchema);
module.exports = placesModel;