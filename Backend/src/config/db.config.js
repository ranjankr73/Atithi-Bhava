const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.CONNECTION_STRING);

        if(connectionInstance){
            console.log("DB is connected.");
        }
    } catch (error) {
        console.log(`Error while connecting DB: ${error}`);
    }
}

module.exports = connectDB;