import User from "../models/userSchema.js"

export const userSignup= async(req,res)=>{
    try{
        const exists=await User.findOne({username:req.body.username});
        if(exists){
            return res.status(401).json('Username already exists');
        }
        const user =req.body;
        const newUser=new User(user);
        await newUser.save();

        res.status(200).json("User is successfully registered")
    }catch(err){
        console.log("Error: ",err.message);
    }
}

export const userLogin=async(req,res)=>{
    try{
        let user= await User.findOne({usename:req.body.username,password:req.body.password});
        if(user){
            return res.status(200).json(`${req.body.username} login successfull`)
        }
        else{
            return res.status(401).json("invalid email or password");
        }
    }
    catch(err){
        console.log("Error: ",err.messgae);
    }
}