const commentModel = require("../model/comment");
const productModel = require("../model/product");

const productComment = async (req, res)=>{
    const id = req.body.id; 
    const {text} = req.body;

    try {
        const product = await productModel.findById(id);
        const comment = new commentModel({
            text: text,
            product: product._id
        }); 
        res.status(200).send(comment);
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {productComment};
