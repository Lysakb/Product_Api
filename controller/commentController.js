const commentModel = require("../model/comment");
const productModel = require("../model/product");

const productComment = async (req, res)=>{
    const id = req.params.id; 
    const {text} = req.body;
    const user = req.user;

    try {
        const product = await productModel.findById(id);
        const comment = new commentModel({
            text: text,
            user_id: user._id,
            username: `${user.username}`

        }); 
        product.comment = product.comment.concat(comment._id)
        await product.save();
        await comment.save();
        res.status(200).send(comment);
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {productComment};
