const express = require('express');
const {getAllProducts, getAvailableProducts, getProductById, addProduct, updateProduct, deleteProduct} = require("../controller/productController");
const authenticateUser = require("../middleware/authentication");
const {authorization} = require("../middleware/authorization");

const productRouter = express.Router();

productRouter.get("/get",  getAllProducts);
productRouter.get("/available", authenticateUser, getAvailableProducts);
productRouter.get("/:id", authenticateUser, getProductById);
productRouter.post("/add", authenticateUser, authorization, addProduct);
productRouter.put("/update/:id", authenticateUser, authorization, updateProduct);
productRouter.delete("/delete/:id", authenticateUser, authorization, deleteProduct);

module.exports = productRouter;