const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    time: Number,
});


// Export model
module.exports = mongoose.model("User", UserSchema);