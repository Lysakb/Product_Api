const express = require('express');
const {addCart, getCart} = require("../controller/cartController");
const authenticateUser = require("../middleware/authentication");


const cartRouter = express.Router();

cartRouter.post("/add-to-cart", authenticateUser, addCart);
cartRouter.get("/get-cart", authenticateUser, getCart);

module.exports = cartRouter;