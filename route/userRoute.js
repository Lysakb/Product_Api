const express = require('express');
const {userSignup, userLogin, getAllUsers} = require("../controller/userController");

const userRouter = express.Router();

userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);
userRouter.get("/get", getAllUsers);

module.exports = userRouter;