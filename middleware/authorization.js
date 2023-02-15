const userModel = require("../model/user");

const authorization = async(req, res, next)=> {
    try{
        const id = req.user.id;
        const user = await userModel.findById(id);
        
        if(!user.role.includes("admin") && !user.role.includes("vendor")){
            return res.status(401).send("Not authorized!")
        }
       
      return next()
        
    }catch(error){
        res.status(400).send(error)
    }
}

const adminAuthorization = async(req, res, next)=> {
    try{
        const id = req.user.id;
        const user = await userModel.findById(id);
        
        if(!user.role.includes("admin")){
            return res.status(401).send("Not authorized!")
        }
       
      return next()
        
    }catch(error){
        res.status(400).send(error)
    }
}

module.exports = {authorization, adminAuthorization}