const express = require("express");
const app = express();
require("dotenv").config();
const connection = require("./config/db");
const userRouter= require("./routes/user.routes");

app.use(express.json());
app.use("/users", userRouter);

const PORT = process.env.PORT


app.listen(PORT, async(req,res)=>{
    try {
        await connection 
        console.log(`connection established to ${PORT}`);
    } catch (error) {
        console.log("connection failed");
    }
})
