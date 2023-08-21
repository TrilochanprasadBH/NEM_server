const express = require("express");
const app = express();
const connection = require("./config/db");
const userRouter = require("./routes/user.route");
const docRouter= require("./routes/doctor.route");


app.use(express.json());
app.use("/users", userRouter);
app.use("/doctors",docRouter)

const PORT = process.env.PORT 
//first do db  , then listen 

app.listen(PORT, async()=>{
    try {
        await connection
        console.log(`server is connected to ${PORT}`) 
    } catch (error) {
        console.log(error);
    }
})

