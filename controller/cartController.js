const cartSchema = require("../model/cart");
const productModel = require("../model/product");

const addCart = async (req, res)=>{
    const {quantity, productid} = req.body;
    const user = req.user;
    try {
        const product = await productModel.findById({_id: productid});

        const cart = new cartSchema({
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
    
}

module.exports = {addCart};