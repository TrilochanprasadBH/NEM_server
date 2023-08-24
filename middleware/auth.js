const jwt= require("jsonwebtoken");


const auth = async(req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1] || null ;
        if(token){
                let decoded = jwt.verify(token, "masai");
                req.body.userID = decoded.userID
               return next();
        }else{
            return res.status(400).send({msg:"token doesnt  exist, please login"});
        }
        
    } catch (error) {
        return res.status(400).send({msg:error.message});
    }
}

module.exports= auth  