const mongoose= require("mongoose"); 

const blogSchema= mongoose.Schema({
    username:String,
    title:String,
    content:String,
    category:String,
    createdAt: {type:Date, default:Date.now},
    likes:Number,
    comments:[],
    userID:String
})

const blogModel= mongoose.model("blog", blogSchema);

module.exports = blogModel


//  "usernmae":"trilo",
// "title":"masai",
// "content":"amazing coding school",
// "category":"Tech",
//  "likes":24,
//  "comments":{"username":"trilo", "comment":"amazing"},
//  "userID":"64e75109d386b330f2a765b9"
