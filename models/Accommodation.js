const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accommodationSchema = new Schema ({
    name: String,
    idStep: [{type: Schema.Types.ObjectId, ref:"tripStep"}],
    checkIn: Date,
    checkOut: Date,
    price: Number,
    telephone: Number,
    email: String,
    address: {
        number: Number,
        street: String,
    },
    notes:{
        type:[String]
    }
});

module.exports = accommodationModel;