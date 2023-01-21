const allRooms = ( req, res ) => {
    res.status(200).json({
        success: true, 
        message: 'All Rooms'
    })
}

// create new room => api/rooms
const newRoom = async ( req, res ) => {
    try{
        const room  = await Room.create(req())
        res.status(200).json({
            success: true,
            message: 'New Room',
            data: room
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
    
}

export {
    allRooms
}