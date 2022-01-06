const mongoose = require("mongoose")


const journeySchema = mongoose.Schema({
    from: String,
    to: Number,
    time: Number,
    maxPlace: String,
    company: String,
    imageUrl:String
});

const journey = mongoose.model("Jourey", journeySchema);

module.exports = { journey };