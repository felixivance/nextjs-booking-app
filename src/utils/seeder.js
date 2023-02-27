const Room = require('../models/room');

const mongoose = require('mongoose');

const rooms =  require('../data/rooms.json');

mongoose.connect('mongodb://0.0.0.0:27017/bookit', {
    // useCreateIndex: true, //not supported
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useFindAndModify: false, //not supported
    family: 4
})
.then(con => console.log("MongoDB Database Connected!"))
.catch(err => console.log(err))


const seedRooms = async () => {
    try{
        await Room.deleteMany();

        console.log('Rooms are deleted');

        await Room.insertMany(rooms);

        console.log("all rooms are added");

        process.exit();
        
    }catch(error){
        console.log(error.message);
        process.exit();
    }
}

seedRooms();