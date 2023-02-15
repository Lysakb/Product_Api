const express = require('express');
const {getAllProducts, getProductById, addProduct, updateProduct, deleteProduct} = require("../controller/productController");
const authenticateUser = require("../middleware/authentication");

const productRouter = express.Router();

productRouter.get("/get", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/add", authenticateUser ,addProduct);
productRouter.put("/update/:id", authenticateUser, updateProduct);
productRouter.delete("/delete/:id", authenticateUser, deleteProduct);

module.exports = productRouter;