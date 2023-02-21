const cartSchema = require("../model/cart");
const productModel = require("../model/product");

const addCart = async (req, res)=>{
    const product_id = req.body.id;
    const {quantity, user_id} = req.body;
    const user = req.user;
    try {
        const product = await productModel.findById(product_id);
        console.log(product) 

        const cart = new cartSchema({
            product_id: product,
            quantity: quantity,  
            user_id: user._id
        })
        await cart.save();
        res.status(200).send({cart, product});
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {addCart};