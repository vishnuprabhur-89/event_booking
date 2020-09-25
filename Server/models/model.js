var mongoose = require("mongoose");

var Events = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    date: { type: String },
    seats: { type: Number },
    status: { type: Boolean },
    image: { type: String },
});


var EventDetails = mongoose.model('Events', Events);

module.exports = {
    EventDetails: EventDetails,
};