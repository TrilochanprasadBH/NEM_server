const express = require("express");
const blogRouter=  express.Router();
const blogModel= require("../modules/blog.module");
const auth = require("../middleware/auth");

blogRouter.use(auth);

blogRouter.get("/blogs")



module.exports= blogRouter