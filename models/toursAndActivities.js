const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toursAndActivitiesSchema = new Schema ({
    idStep: {type: Schema.Types.ObjectId, ref:"tripStep"},
    dateAndHour: Date,
    description: String,
    ranking: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5]
    }
});

const toursAndActivitiesModel = mongoose.model("ToursAndActivities", toursAndActivitiesSchema);
module.exports = toursAndActivitiesModel;