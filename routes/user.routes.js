const express = require("express");
const userModel= require("../modules/user.module");
const userRouter= express.Router();
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");



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

userRouter.post("/login", async(req,res)=>{
    try {
        const {email, password}= req.body;
        const user = await userModel.findOne({email});
        console.log(user);
        if(user){
                bcrypt.compare(password, user.password, (err,result)=>{
                    if(result){
                        const token = jwt.sign({userId:user._id},"masai");
                        return res.status(200).send({msg:"login successful", token});
                    }else{
                        return res.status(200).send({msg:"password is wrong"});
                    }
                })
        }else{
            return res.status(400).send({msg:"user does not exist"});
        }
    } catch (error) {
        return res.status(400).send({msg:error.message});
    }
})










module.exports= userRouter