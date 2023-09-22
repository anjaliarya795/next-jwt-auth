import mongoose from "mongoose";

export async function connect(){
    try {mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection
    }


    catch(error){
        console.log("Error connecting to MongoDB")
        console.log(error)
    }}