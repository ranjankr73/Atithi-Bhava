const express = require('express');
const eventRoute = express.Router();
const Event = require('../models/event.model');

eventRoute.post('/', async (req, res) => {
    try {
        const { title, description, date, location, coverImage, maxGuests, category } = req.body;
        
        if (!title || !date || !location || !maxGuests) {
            return res.status(400).json({
                message: "Title, Date, Location, and maxGuests are required!"
            });
        }

        const newEvent = new Event({
            title,
            description,
            date: new Date(date),
            // time,
            location,
            coverImage,
            maxGuests,
            category
        });

        const savedEvent = await newEvent.save();
        
        return res.status(201).json({
            event: savedEvent,
            message: "Event created successfully."
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error while creating event!"
        });
    }
});

eventRoute.get('/:id', async (req, res) => {
    try {
        const eventId = req.params.id;

        const event = await Event.findById(eventId);

        if(!event){
            return res.status(404).json({
                message: "Event not found!"
            });
        }

        return res.status(200).json({
            event: event,
            message: "Event fetched successfully."
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error while fetching event!"
        });
    }
});

eventRoute.put('/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        const updates = req.body;

        console.log(eventId);
        console.log(updates);

        updates.date = new Date(updates.date);
        const updatedEvent = await Event.findByIdAndUpdate(eventId, { $set : updates }, { new: true });

        if(!updatedEvent){
            return res.status(404).json({
                message: "Event not found!"
            });
        }

        return res.status(200).json({
            event: updatedEvent,
            message: "Event updated successfully."
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error while updating event!"
        });
    }
});

eventRoute.delete('/:id', async (req, res) => {
    try {
        const eventId = req.params.id;

        const event = await Event.findByIdAndDelete(eventId);

        if(!event){
            return res.status(404).json({
                message: "Event not found!"
            });
        }

        return res.status(200).json({
            event: event,
            message: "Event deleted successfully."
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error while deleting event!"
        });
    }
});

module.exports = eventRoute;