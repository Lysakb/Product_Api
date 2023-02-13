const mongoose = require("mongoose");
const commentModel = require("./comment");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },

    Category: {
        type: String,
        required: true
    },

    Description: {
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

    comment: [
        commentModel
    ]
    ,

    availability:{
        type: Boolean,
        default: true,
        enum: [true, false]
    }
})

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;