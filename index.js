const express = require("express");
const app = express();
require("dotenv").config();
const connection = require("./config/db");

app.use(express.json());

const PORT = process.env.PORT


app.listen(PORT, async(req,res)=>{
    try {
        await connection 
        console.log(`connection established to ${PORT}`);
    } catch (error) {
        console.log("connection failed");
    }
})
