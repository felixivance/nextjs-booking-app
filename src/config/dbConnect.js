import mongoose from 'mongoose';

const dbConnect = () => {
    if(mongoose.connection.readyState >= 1){
        return
    }

    mongoose.connect(process.env.MONGODB_URI, {
        // useCreateIndex: true, //not supported
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // useFindAndModify: false, //not supported
        family: 4
    })
    .then(con => console.log("MongoDB Database Connected!"))
    .catch(err => console.log(err))
}

export default dbConnect;