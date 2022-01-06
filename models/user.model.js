const mongoose = require("mongoose")


const UserSchema = mongoose.Schema({
    id: String,
    nom: String,
    prenom: String,
    
});

const user = mongoose.model("user", UserSchema);

module.exports = { user };