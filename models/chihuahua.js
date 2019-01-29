const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chihuahuaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        default: "http://via.placeholder.com/200X200"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Chihuahua = mongoose.model("Chihuahua", chihuahuaSchema);

module.exports = Chihuahua;