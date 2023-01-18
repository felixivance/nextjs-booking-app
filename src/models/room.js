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
    }
});

export default mongoose.model.Room || mongoose.model('Room', roomSchema)