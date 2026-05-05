import { User } from "../models/user.model.js";

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
        res.status(500).json({message:"internal error",error:err.message});
    }
}
const loginUser=async(req,res)=>{
    try{
        // checking if user already exists
        const {email,password}=req.body;
        const user=await User.findOne({email:email.toLowerCase()});


        if(!user)return res.status(404).json({message:"user not found"});
        
        //compare password
        const isMatch=await user.comparePassword(password);
        if(!isMatch)return res.status(400).json({
            message:"invalid credentials"
        })

        res.status(200).json({
            message:"user logged in",
            user:{
                id:user._id,
                email:user.email,
                username:user.username,
            }
        });

    }
    catch(err){
        console.log(`internal server error ${err}`);
    }
}

const logoutUser=async(req,res)=>{
    try{
        const {email}=req.body;
        const user=await User.findOne({email});
        if(!user)return res.status(404).json({message:"user not found"});

        res.status(200).json(
            {message:"logout successfull"}
        );
    }
    catch(err){
        console.log(`unable to logout due to${err}`);
    }
}

export { loginUser, registerUser ,logoutUser};
