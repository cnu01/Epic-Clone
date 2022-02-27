const { Router } = require("express");
const protect = require("../middleware/protect");
const route = Router();
const Games = require('../models/games.model');
const Users = require('../models/users.model');


route.get("/",protect,async(req,res)=>{
    try
    {
       const user = await Users.findById({_id:req.body.user_id});

       if(user.wishlist.length>0)
       {
            const wishlist=user.wishlist.map(async(item)=>{
                const games = await Games.findById({_id:item}).lean().exec();

                return games;
            });
            if(!wishlist)
            {
                res.status(500).send({status:false,message:"Data could not be fetched",error:true});
            }

            res.status(200).send({status:true,data:wishlist,message:"wishlist fetched successfully",error:false});
       }

    }
    catch(e)
    {
        res.status(500).send({status:false,message:"Data could not be fetched",error:true});
    }

})

route.post("/",protect,async(req,res)=>{
    try
    {
        const games  = await Games.findById({_id:req.body.game_id});
        if(!games)
        {
            res.status(404).send({status:false,message:"Invalid game id",error:true});
        }

    const updated_user = await Users.findByIdAndUpdate(req.body.user_id,{$push:{wishlist:req.body.game_id}})
        if(!updated_user)
        {
            res.status(500).send({status:false,message:"Product could not be added to wishlist",error:true});
        }

        
        res.status(200).send({status:true,message:"Product added to wishlist",error:false});
        

    }
    catch(e)
    {
        res.status(500).send({status:false,message:"Data could not be fetched",error:true});
    }
})

module.exports = route;