const mongoose = require("mongoose");

const dbConnect = () => {
    if(mongoose.connection.readyState >= 1) {
        return
    }

    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(con => console.log('Connected to local database'));
}

module.exports = dbConnect;