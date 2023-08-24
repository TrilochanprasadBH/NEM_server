const express = require("express");
const blogRouter=  express.Router();
const blogModel= require("../modules/blog.module");
const auth = require("../middleware/auth");

blogRouter.use(auth);

blogRouter.get("/blogs", async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

blogRouter.post("/blogs", async(req,res)=>{
    try {
        const {username,title,content,category,date,likes,comments}= req.body;
            const newblog= new blogModel({...req.body})
    } catch (error) {
        
    }
})




module.exports= blogRouter