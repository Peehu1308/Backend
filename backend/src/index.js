import app from "./app.js";
import dotenv from "dotenv";
import connectDb from "./config/database.js";

dotenv.config();

const startServer=async()=>{
    try{
        await connectDb();
        app.on("error",(error)=>{
            console.log("ERROR",error)
        });
        const port=process.env.PORT || 5000
        app.listen(port)
        console.log(`server is running on ${port}`);
    }
    catch(err){
        console.log(`the connection has failed ${err}`)
    }
}


startServer();
