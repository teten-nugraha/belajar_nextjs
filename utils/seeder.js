const Room = require("../models/room");
const mongoose = require('mongoose');
const dbConnect = require("../config/dbConnect");

const rooms = require("../data/rooms");

mongoose.connect("mongodb://localhost:27017/bookit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(con => console.log('Connected to local database'));

const seedRooms = async() => {
    try {
        await Room.deleteMany();
        console.log('Rooms are deleted')

        await Room.insertMany(rooms);
        console.log('All Rooms added');


    }catch(error) {
        console.log(error);
        process.exit();
    }
}

seedRooms();