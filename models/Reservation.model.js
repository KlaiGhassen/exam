const mongoose = require("mongoose")


const journeySchema = mongoose.Schema({
    journey: String,
    user: Number,
    reservedAt: {type:Date, default: Date.now()},
    maxPlace: String,
    company: String,
    imageUrl:String
});

const journey = mongoose.model("Jourey", journeySchema);

module.exports = { journey };