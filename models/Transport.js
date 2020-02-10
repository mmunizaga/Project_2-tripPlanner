const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transportSchema = new Schema ({
    type: {
        type: [String],
        enum: ["bus","boat","bike","car","motorcycle","plane","train"]
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
    ticketUrl: String,
    price: Number,
    notes:{
        type:[String]
    }
});

const transportModel = mongoose.model("Transport", transportSchema);
module.exports = transportModel;