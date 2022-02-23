const {Router} = require("express");
const Games = require("../models/games.model");

const router=Router();

router.post("/",async(req,res)=>{
            try
            {
                const games = await Games.create(req.body);
                res.status(201).send({status:true,data:games,message:"Data inserted successfully",error:false});
            }   
            catch(e)
            {
                console.log(e);
                res.status(500).send({status:false,message:"Data could not be inserted",error:e.message});
            }
});

router.get("/",async(req,res)=>{
            try
            {
                const games = await Games.find().lean().exec();
                res.status(200).send({status:true,data:games,message:"Data fetched successfully",error:false});
            }
            catch(e)
            {
                res.status(500).send({status:false,message:"Data could not be fetched",error:e.message});
            }
});

module.exports=router;

