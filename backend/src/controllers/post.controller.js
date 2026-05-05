import { Post } from "../models/post.model";

//  create a post
const createPost=async(req,res)=>{
    try{
        const {name,description,age}=req.body;

        if(!name || !description || !age)return res.status(404).json({message:"the fields are missing"});

        const post=await Post.create({
            name,description,age
        });
        res.status(200).json({message:"post created successfully"});
    }
    catch(err){
        console.log(err);
    }
}