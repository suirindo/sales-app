import mongoose, { connect, mongo, Schema } from "mongoose"

const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://asagiman:hfujj3h9sjUhwHBI2@cluster0.8ybmf.mongodb.net/appDatabase?retryWrites=true&w=majority")
            console.log("Success: Connected to MongoDB")
    } catch(err){
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}
export default connectDB
