const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: Date,
    },
    location: {
        type: String,
        required: true
    },
    maxGuests: {
        type: Number,
        required: true,
    },
    coverImage: {
        type: String,
    },
    category: {
        type: String,
    },
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    guests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Guest'
    }],
}, { timestamps: true });

module.exports = mongoose.model('event', eventSchema);