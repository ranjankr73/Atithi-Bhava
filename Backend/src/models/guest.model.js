const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    event : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
    },
    rsvpStatus: {
        type: String,
        enum: ['Pending', 'Attending', 'Not Attending', 'Maybe'],
        default: 'Pending',
    },
    dietaryPreference: {
        type: String,
    },
    additionalNotes: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('guest', guestSchema);