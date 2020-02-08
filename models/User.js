const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    trips: {
        type: [Schema.Trip.ObjectId],
        ref: "trip"
    }
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;