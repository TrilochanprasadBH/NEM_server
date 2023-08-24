const express = require("express");
const userModel= require("../modules/user.module");
const userRouter= express.Router();
const bcrypt = require("bcrypt");


userRouter.post("/signup", async(req,res)=>{
    try {
        let {username, image, email, password} = req.body 
        const existinguser  = await userModel.find({email});
        if(existinguser.length){
            return res.status(200).send({msg:"user is already registered"});
        }

        const hash = bcrypt.hashSync(password, 10);
        const user = new userModel({...req.body, password:hash});
        await user.save();
        return res.status(200).send({msg:"user registered successfully", registedUser:user})
        
    } catch (error) {
        return res.status(400).send({msg:"sign up failed"})
    }
})











module.exports= userRouter