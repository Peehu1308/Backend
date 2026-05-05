import express from "express";

const app=express(); //crate an express app
app.use(express.json());


// routes import
import usePost from "./routes/post.route.js";
import userRouter from "./routes/user.route.js";

//  routes declaration
app.use("/api/v1/users",userRouter);
app.use("/api/v1/post",usePost);


export default app;



