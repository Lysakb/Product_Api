const express = require('express');
const {addCart} = require("../controller/cartController");
const authenticateUser = require("../middleware/authentication");


const cartRouter = express.Router();

cartRouter.post("/add-to-cart", authenticateUser, addCart);

module.exports = cartRouter;