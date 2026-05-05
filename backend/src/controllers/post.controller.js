import { Post } from "../models/post.model.js";

//  create a post
const createPost=async(req,res)=>{
    try{
        const {name,description,age}=req.body;

        if(!name || !description || !age)return res.status(404).json({message:"the fields are missing"});

        const post=await Post.create({
            name,description,age
        });
        res.status(200).json({message:"post created successfully".post});
    }
    catch(err){
        console.log(err);
    }
}

const getPosts=async(req,res)=>{
    try{
        const posts=await Post.find();
        res.status(200).json(posts);
    }
    catch(err){
        console.log(`there is an error${err}`)
    }
}

export {
    createPost,
    getPosts
};

