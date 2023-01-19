import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Please enter room name'],
        trim: true,
        maxLength: [100, 'Room name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter room price'],
        trim: true,
        maxLength: [4, 'Room price cannot exceed 4 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter room description'],
    },
    address: {
        type: String, 
        required: [true, 'Please enter room address'],
    },
    guestCapacity: {
        type: Number,
        required: [true, 'Please enter room guest capacity'],
    },
    numOfBeds: {
        type: Number,
        required: [true, 'Please enter number of beds in room'],
    },
    internet: {
        type: Boolean,
        default: false
    },
    breakfast: {
        type: Boolean,
        default: false
    },
    airConditioned: {
        type: Boolean,
        default: false
    },
    roomCleaning: {
        type: Boolean,
        default: false
    },
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select room category'],
        enum: {
            values: [
                'King',
                'Single',
                'Twins'
            ],
            message:'Please select correct category for room'
        }
    }
});

export default mongoose.model.Room || mongoose.model('Room', roomSchema)