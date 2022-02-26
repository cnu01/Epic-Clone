const express = require('express');
const app=express();

const {login,signup}=require("./controllers/users.controller");
const gameController=require("./controllers/games.controller");
app.use(express.json());
app.use("/login",login);
app.use("/signup",signup);
app.use("/games",gameController);
app.use("/games/:id",gameController);

module.exports=app;
