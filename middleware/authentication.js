const jwt = require("jsonwebtoken");
const userModel = require("../model/user");
require("dotenv").config();

const authenticateUser = async (req, res, next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(" ")[1];

            const verifiedToken = jwt.verify(token, process.env.SECRET_TOKEN);
        
            req.user = await userModel.findById(verifiedToken.id);
            next()

             
        }catch(error){
            res.status(400).send("Not authorized!")
        }
    }

    if(!token){
        return res.status(400).send("No token!")
    }

}

module.exports = authenticateUser;