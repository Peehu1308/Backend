import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";


dotenv.config();

//allows you to talk to mongodb
const connectDb=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}?retryWrites=true&w=majority`);
        console.log(`mongodb connected ${connectionInstance.connection.host}`);

    }
    catch(err){
        console.log(err);
    }
}

export default connectDb;
