const express = require("express");
const blogRouter=  express.Router();
const blogModel= require("../modules/blog.module");
const auth = require("../middleware/auth");

blogRouter.use(auth);

blogRouter.get("/blogs", async(req,res)=>{
    try {
        let allblogs = await blogModel.find();
        return res.status(200).send(allblogs);
    } catch (error) {
        return res.status(400).send({msg:"no blogs present"});
    }
})

blogRouter.post("/blogs", async(req,res)=>{
    try {
        const {userID}= req.body;
            const newblog= new blogModel({...req.body, userID})
            await newblog.save();
            return res.status(200).send({msg:"blog post was added"});
    } catch (error) {
        return res.status(400).send({msg:error.message});
    }
})




module.exports= blogRouter