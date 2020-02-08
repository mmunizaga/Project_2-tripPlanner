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
    id_friends: {
        type: Schema.Types.ObjectId,
        ref: "Friends"
    },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;