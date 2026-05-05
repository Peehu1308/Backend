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

const updatePost=async(req,res)=>{
    try{
        // validation to check if empty body

        // below line gives just the keys
        if(Object.keys(req.body).length===0){
            return res.status(400).json({message:"no data for update"});

        }

        const post=await Post.findByIdAndUpdate(req.params.id,req.body,
            {new:true}
        );
        if(!post)return res.status(404).json({message:"post not found"});
        res.status(200).json({message:"post updated",post});

    }
    catch(err){
        console.log(`there is an error${err}`)
    }
}
export {
    createPost,
    getPosts,
    updatePost
};

