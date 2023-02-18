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

const getAvailableProducts = async (req, res)=>{
    
   try {
    const availableProducts = await productModel.find().where({available : "true"}) 
        res.status(200).send(availableProducts);
    
   } catch (error) {
    res.status(400).send(error.message);
   }
   
}

const addProduct = async (req, res)=>{ 
    const {product_name, category, description, image, price, available} = req.body;
   
    try{
        const product = new productModel({
            product_name  : product_name,
            category : category,
            description : description,
            image : image,
            price : price,
            available : available
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
    const id = req.params.id;
    
    const {product_name, category, description, image, price, available} = req.body;
   
    try{
        const product = await productModel.findByIdAndUpdate(id, {$set: {
            product_name  : product_name, 
            category : category,  
            description : description,
            image : image, 
            price : price, 
            available : available,
            
        }, 
   
    },
    {new: true}) 
        await product.save()
        res.status(200).send({message: "Product updated successfully", product});
    }catch(error){
        res.status(400).send(error.message);
    }
} 

const deleteProduct = async (req, res)=>{
    const id = req.params.id;
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

module.exports = {getAllProducts,getAvailableProducts ,getProductById, addProduct, updateProduct, deleteProduct}