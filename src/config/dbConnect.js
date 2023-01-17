import mongoose from 'mongoose';

const dbConnect = () => {
    if(mongoose.connection.readyState >= 1){
        return
    }

    mongoose.connect(process.env.MONGODB_URI, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
}
