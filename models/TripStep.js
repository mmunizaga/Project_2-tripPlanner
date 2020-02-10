const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripStepSchema = new Schema ({
    country: String,
    city: String,
    from: Date,
    to: Date
});

const tripStepModel = mongoose.model("tripStep", tripStepSchema);
module.exports = tripStepModel;