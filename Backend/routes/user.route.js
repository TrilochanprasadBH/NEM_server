const express = require("express");
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken");
const userModel = require("../modules/user.model");
const userRouter= express.Router()


userRouter.post("/signup", async(req,res)=>{
    
    try {
        let {email, password, confirmPassword}   = req.body;
        const existingUser = await userModel.find({email});
        
        if(existingUser.length){
            return res.status(200).send({msg:"user already registered"})
        }
        if(password===confirmPassword){
            const hashedpassword= bcrypt.hashSync(password,10);
            const user= new userModel({...req.body, password:hashedpassword});
              await user.save();
              return res.status(200).send({msg:"user successfully registered", registeredUser:{...req.body, password:hashedpassword}})
    
        }
        
    } catch (error) {
        
    }
})

userRouter.post("/login", async(req,res)=>{
    try {
        let {email,password}= req.body
        const euser= await userModel.findOne({email});
        console.log(euser);
        if(euser){
           

            bcrypt.compare(password, euser.password, (err, result)=> {
                // result == true
                if(result){
                   
                   let token = jwt.sign({module:"mock"}, "masai");
                   return res.status(200).send({msg:"login successful", token});
                   
                } else{
                    return res.status(200).send({msg:"Wrong Password"})
                }
                
            }); 

        }else{
            return res.status(200).send({msg:"User not found"})
        }
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})


module.exports= userRouter