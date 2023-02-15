const userModel = require("../model/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateUser = async(req, res)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startswith('Bearer')){
        try{
            token = req.headers.authorization.split(" ")[1]

        const verifiedToken = jwt.verify(token, process.env.SECRET_KEY);

        req.user = await userModel.findById(verifiedToken.id);
        }catch(error){
            res.status(400).send({message: "Not authorized!"})
        }
    }

    if(!token){
        res.status(400).send({message: "No Token!"})
    }
}

module.exports = authenticateUser;