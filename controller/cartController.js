const cartModel = require("../model/cart");
const productModel = require("../model/product");
const userModel = require("../model/user");

const addCart = async (req, res)=>{
    const {quantity, productid} = req.body;
    const user = req.user;
    try {
        const product = await productModel.findById({_id: productid});

        const cart = new cartModel({
            product_id: product._id,
            quantity: quantity,
            user_id: user._id
        })
        await cart.save();
        res.status(200).send({cart, product});
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getCart = async (req, res)=>{
    const user = req.user.id; 
    
    try {
        const cart = await cartModel.find({user_id: user}).populate("product_id", {product_name: 1, category: 1, price: 1});
        if(!cart){
            return res.status(404).send({message: "You do not have any cart!"})
        }
        res.status(200).send(cart);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {addCart, getCart};