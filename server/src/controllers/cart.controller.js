const { Router } = require("express");
const route = Router();
const Games = require('../models/games.model');
const Users = require('../models/users.model');
const protect=require('../middleware/protect')

route.get("/",protect,async(req,res)=>{
    try
    {
        const user = await Users.findById(req.body.user_id).lean().exec();
        res.status(200).send({status:true,data:user.orders,message:"Cart fetched successfully",error:false});

    }
    catch(err)
    {
        res.status(500).send({status:false,message:"Data could not be fetched",error:true});
    }

});

route.post("/",protect,async(req,res)=>{
    try
    {
        const games  = await Games.findById({_id:req.body.game_id});
        if(!games)
        {
            res.status(404).send({status:false,message:"Invalid game id",error:true});
        }

    const updated_user = await Users.findByIdAndUpdate(req.body.user_id,{$push:{orders:req.body.game_id}})
        if(!updated_user)
        {
            res.status(500).send({status:false,message:"Product could not be added to cart",error:true});
        }

        
        res.status(200).send({status:true,message:"Product added to cart",error:false});
        

    }
    catch(e)
    {
        console.log(e);
        res.status(500).send({status:false,message:"Data could not be fetched",error:true});
    }
})

module.exports = route;