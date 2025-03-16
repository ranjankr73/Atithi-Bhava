const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./config/db.config');

dotenv.config();

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    })
    .catch((err)  => {
        console.log(`Error while setting the server: ${err}`);
    });