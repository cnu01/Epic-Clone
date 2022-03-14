const express = require("express");
const app = express();
const cors = require("cors");
const { login, signup, getUser } = require("./controllers/users.controller");
const gameController = require("./controllers/games.controller");
const cartController = require("./controllers/cart.controller");
const wishlistController = require("./controllers/wishlist.controller");
const purchasedController = require("./controllers/purchased.controller");
const protect = require("./middleware/protect");
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.get("/user", protect, getUser);
app.use("/login", login);
app.use("/signup", signup);
app.use("/games", gameController);
app.use("/games", gameController);
app.use("/cart", cartController);
app.use("/wishlist", wishlistController);
app.use("/purchased", purchasedController);
module.exports = app;
