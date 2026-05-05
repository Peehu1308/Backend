import {User} from "../models/user.model.js";

const registerUser=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        // basic validation
        if(!username || !email ||!password){
            return res.status(400).json({message:"All fields are important"})
        }

        // check if the user exists already

        const existing=await User.findOne({email:email.toLowerCase()});
        if(existing){
            return res.status(400).json({message:"user already exist"});
        }

        // create a user
        const user=await User.create({
            username,
            email,
            password,
            loggedIn:false,
        });
        res.status(201).json({message:"user registered successfully",
            user:{id:user._id,email:user.email,username:user.username}
        });

    }
    catch(err){
        res.status(500).json({message:"internal error",error:error.message});
    }
}

export {
    registerUser
}