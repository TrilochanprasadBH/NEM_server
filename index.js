const express = require("express");
const app = express();
require("dotenv").config();
const connection = require("./config/db");
const userRouter= require("./routes/user.routes");
const blogRouter = require("./routes/blog.routes");
const cors = require("cors");

app.use(cors)

app.use(express.json());
app.use("/users", userRouter);
app.use("/blogs", blogRouter);


const PORT = process.env.PORT


app.listen(PORT, async(req,res)=>{
    try {
        await connection 
        console.log(`connection established to ${PORT}`);
    } catch (error) {
        console.log("connection failed");
    }
})
