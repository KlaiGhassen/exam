const mongoose = require("mongoose")


const journeySchema = mongoose.Schema({
    from: String,
    to: String,
    time: Date,
    maxPlace: Number,
    company: String,
    imageUrl:String
});

const journey = mongoose.model("Jourey", journeySchema);

module.exports = { journey };