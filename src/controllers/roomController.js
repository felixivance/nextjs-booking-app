const allRooms = ( req, res ) => {
    res.status(200).json({
        success: true, 
        message: 'All Rooms'
    })
}

// create new room => api/rooms
const newRoom = async ( req, res ) => {
    const room  = await Room.create(req())
    res.status(200).json({
        success: true,
        message: 'New Room'
    })
}

export {
    allRooms
}