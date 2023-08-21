const jwt = require("jsonwebtoken");


const auth = async(req,res,next)=>{
        try {
            const token = req.headers.authorization?.split(" ")[1] || null
            if(token){
                let decoded= jwt.verify(token, "masai");
                 return next()
            }else{
               return  res.status(400).send({msg:"token not present, login"})
            }
        } catch (error) {
            return res.status(400).send(error);
        }
}

module.exports=auth
