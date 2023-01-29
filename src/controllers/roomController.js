import Room from '../models/room.js'

const allRooms = async ( req, res ) => {
   try {
    console.log(req);
    const rooms = await Room.find();
    
    res.status(200).json({
        success: true,
        message: 'All Rooms',
        count: rooms.length,
        data: rooms
    });

   }catch(error){

    res.status(500).json({
        success: false,
        message: error.message
    })
   }
}

// create new room => api/rooms
const newRoom = async ( req, res ) => {
    try{
        const room  = await Room.create(req.body)
        res.status(200).json({
            success: true,
            message: 'New Room',
            data: room
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
    
}

export {
    allRooms, newRoom
}