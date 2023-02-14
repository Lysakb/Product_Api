const mongoose = require("mongoose");
const productModel = require("./product");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true,
        default: "user",
        enum: ["user", "admin", "vendor"]
    },

    // Product: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "Product"
    // }
})

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
