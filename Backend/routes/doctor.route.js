const express=require("express");
const app = express();
const docModel= require("../modules/doctor.model");
const auth = require("../middleware/auth.middleware");

const docRouter= express.Router();
docRouter.use(auth);


docRouter.post("/appointments", async(req,res)=>{
    try {
        let {name,image, specialisation,experience,location,date,slots,fee}= req.body
        const existingUser = await docModel.find({name});
        
        if(existingUser.length){
            return res.status(200).send({msg:"Doctor already appointed"})
        }

        const doctor= new docModel({...req.body});
        await doctor.save();
        return res.status(200).send({msg:"doctor successfully registered", registeredDoctor:{...req.body}})

    } catch (error) {
        return res.status(400).send({msg:error.message})
    }
})







module.exports= docRouter
