const jwt = require('jsonwebtoken');
require('dotenv').config();
const verifyToken = (token)=>{
    return new Promise((resolve,reject)=>{
                jwt.verify(token,process.env.JWT_SECRET_TOKEN,(err,payload)=>{
                        if(err) return reject(err);

                        return resolve(payload);
                });
            });
        
}
const protect = async(req,res,next)=>{
        const bearer = req.headers.authorization;
        if(!bearer || bearer.startsWith("bearer "))
        {
            res.status(403).send({status:false,message:"User not authenticated",error:true});
        }
        const token = bearer.split("Bearer ")[1].trim();
        let payload;
        try
        {
            payload= await verifyToken(token);
            req.body.user_id=payload.user;
        }
        catch(e)
        {
            res.status(403).send({status:false,message:"User not authenticated",error:true});
        }
        next();
}

module.exports=protect;