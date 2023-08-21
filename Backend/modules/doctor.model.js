const mongoose= require("mongoose");

const docSchema = mongoose.Schema({
    name:String,
    image:String,
    specialisation:String,
    experience:String,
    location:String,
    Date: Date,
    slots:String,
    fee:String
})

const docModel = mongoose.model("doctor", docSchema);

module.exports= docModel 