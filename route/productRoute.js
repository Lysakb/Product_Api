const express = require('express');
const {getAllProducts, getProductById, addProduct, updateProduct, deleteProduct} = require("../controller/productController");

const productRouter = express.Router();

productRouter.get("/get", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/add", addProduct);
productRouter.put("/update/:id", updateProduct);
productRouter.delete("/delete/:id", deleteProduct);

module.exports = productRouter;