const userModel = require('../model/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignup = async (req, res)=>{
        const {username, email, password, role} = req.body;
    
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = new userModel({
                username: username,
                email: email,
                password: hashedPassword,
                role: role
            })

            const savedUser = await userModel.findOne({email});
            if(savedUser){
             return res.status(400).send({message: "User already exists, please login"});
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
          return  res.status(400).send({message: "User does not exist, please signup"});
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
          return  res.status(400).send({message: "Invalid password, please try again"});
        }
        
        const userId = {
            id: user._id,
            email: user.email
        }

        const token = jwt.sign(userId, process.env.SECRET_TOKEN, {expiresIn: "1h"})

        res.status(200).send({message: "Login successful!", token});
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getAllUsers = async (req, res)=>{
    try{
        const user = await userModel.find();
        if(!user){
          return  res.status(400).send("No users found!")
        }
        res.status(200).send(user);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getUserById = async(req,res)=>{
    const id = req.params.id;
    try{
        const user = await userModel.findById(id);
        if(!user){
          return  res.status(400).send("No users found!")
        }
        res.status(200).send(user);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const editRole = async (req, res)=>{
    const id = req.params.id;
    const {role} = req.body;

    try {
        const user = await userModel.findByIdAndUpdate(id, {role: role})
        if(!user){
            return res.status(500).send("user not found!")
        }
        await user.save()
        res.status(200).send({message: "role updated successfully!", user: user.role})
        } catch (error) { 
        res.status(400).send(error.message);
    }
}

const userLogout = async(req, res)=>{
    // const id = req.user._id;
    const token = req.token;
    console.log(token);
    try {
       const deleteToken = await userModel.findByIdAndDelete(id, verifiedToken);
       res.status(200).send("log out successfully") 
  
    } catch (error) {
        res.status(400).send(error.message);
    }
      
}

// app.get('/logout', (req, res) => {
//     res.clearCookie('nToken');
//     return res.redirect('/');
//   });

module.exports = {
    userSignup,
    userLogin,
    getAllUsers,
    getUserById,
    editRole,
    userLogout
}