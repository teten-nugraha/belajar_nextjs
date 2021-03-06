import Room from '../models/room';

// get all room => /api/rooms
const allRooms = async (req, res) => {
    
    try {

        const rooms = await Room.find();

        res.status(200).json({
            success: false,
            count: rooms.length,
            rooms
        });

    }catch(error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }

}

// create new room => /api/rooms
const newRoom = async(req, res) => {
    try {

        const room = await Room.create(req.body);

        res.status(200).json({
            success: true,
            room
        })

    }catch(error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
}

// get room details => /api/rooms/:id
const getSingleRoom = async (req, res) => {
    try {

        const room = await Room.findById(req.query.id)
        
        if(!room) {
            res.status(404).json({
                success: false,
                error: 'Room not found with this ID'
            });
        }

        res.status(200).json({
            success: true,
            room
        });

    }catch(error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
}

const updateRoom = async (req, res) => {
    try{

        const room = await Room.findById(req.query.id)
        
        if(!room) {
            res.status(404).json({
                success: false,
                error: 'Room not found with this ID'
            });
        }

        let roomUpdated = await Room.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

        res.status(200).json({
            success: true,
            roomUpdated
        })

    }catch(error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
}

const deleteRoom = async (req, res) => {
    try{

        const room = await Room.findById(req.query.id)
        
        if(!room) {
            res.status(404).json({
                success: false,
                error: 'Room not found with this ID'
            });
        }

        await room.remove()

        res.status(200).json({
            success: true,
            message: 'Room is deleted'
        })

    }catch(error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
}

export {
    allRooms,
    newRoom,
    getSingleRoom,
    updateRoom,
    deleteRoom
}