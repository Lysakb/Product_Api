const productModel = require("../model/product");

const getAllProducts = async (req, res)=>{
    try{
        const product = await productModel.find();
        if(!product){
            res.status(400).send("Products are not available at the moment")
        }
        res.status(200).send(product);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const addProduct = async (req, res)=>{
    const {product_name, category, description, image, price, availability} = req.body;

    try{
        const product = new productModel({
            product_name  : product_name,
            Category : category,
            Description : description,
            image : image,
            price : price,
        })

        await product.save();
        res.status(201).send(product);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getProductById = async (req, res)=>{
    const id = req.params;
    try{
        const product = await productModel.findById(id);
        if(!product){
            res.status(400).send({message:"This product is currently not available!"})
        }
        res.status(200).send(product);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const updateProduct = async (req, res)=>{
    const id = req.params;
    const {product_name, category, description, image, price, availability} = req.body;
    
    try{
        const product = await productModel.findByIdAndUpdate(id, {
            product_name  : product_name,
            Category : category,
            Description : description,
            image : image,
            price : price,
            availability : availability,
        },
        {new:true}
        );
        if(!product){
            res.status(400).send({message:"This product is currently not available!"})
        }
        await product.save();
        res.status(200).send(product);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const deleteProduct = async (req, res)=>{
    const id = req.params;
    try{
        const product = await productModel.findByIdAndDelete(id);
        if(!product){
            res.status(400).send({message:"This product is currently not available!"})
        }
        res.status(200).send({message:"Product deleted successfully"});
    }catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = {getAllProducts, getProductById, addProduct, updateProduct, deleteProduct}