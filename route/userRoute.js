const express = require('express');
const {userSignup, userLogin, getAllUsers, editRole, getUserById} = require("../controller/userController");
const {adminAuthorization} = require("../middleware/authorization");
const authenticateUser = require("../middleware/authentication");

const userRouter = express.Router();

userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);
userRouter.get("/get", getAllUsers);
userRouter.put("/update/:id", authenticateUser, adminAuthorization, editRole);
userRouter.get("/get/:id", getUserById);

module.exports = userRouter; 