const express = require('express');
const app=express();
const cors = require('cors');
const {login,signup}=require("./controllers/users.controller");
const gameController=require("./controllers/games.controller");
const cartController = require('./controllers/cart.controller');
const wishlistController = require('./controllers/wishlist.controller');
app.use(cors({
    origin:'*'
}))
app.use(express.json());


app.use("/login",login);
app.use("/signup",signup);
app.use("/games",gameController);
app.use("/games",gameController);
app.use("/cart",cartController);
app.use("/wishlist",wishlistController);
module.exports=app;
