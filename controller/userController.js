const userModel = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignup = async (req, res)=>{
        const {username, email, password} = req.body;
    
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = new userModel({
                username: username,
                email: email,
                password: hashedPassword
            })

            const savedUser = await userModel.findOne({email});
            if(savedUser){
                res.status(400).send({message: "User already exists, please login"});
            }
            await user.save();
            res.status(200).send({message: "Signup successful!", user});
        } catch (error) {
            res.status(400).send(error.message);
        }
}

const userLogin = async (req, res)=>{
    const {email, password} = req.body;

    try{
        const user = await userModel.findOne({email});
        if(!user){
            res.status(400).send({message: "User does not exist, please signup"});
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            res.status(500).send({message: "Invalid password, please try again"});
        }
        
        const userID = {
            id: user._id,
            email: user.email
        }

        const token = jwt.sign(userId, process.env.SECRET_TOKEN, {expiresIn: "1h"})

        res.status(200).send({message: "Login successful!", token});
    }catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    userSignup,
    userLogin
}