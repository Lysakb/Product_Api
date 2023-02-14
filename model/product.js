const mongoose = require("mongoose");
const commentModel = require("./comment");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    availability:{
        type: Boolean,
        default: true,
        enum: [true, false]
    }
})

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;