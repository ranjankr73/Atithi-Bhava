const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/user.route');
const eventRoute = require('./routes/event.route');
const app = express();

//Middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());

//Routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/event', eventRoute);
// app.use('/api/v1/guest', guestRoute);

module.exports = app;