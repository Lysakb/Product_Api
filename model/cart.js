const mongoose = require("mongoose");
const productModel = require("./product");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  [{
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    product_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
        },
    
    quantity: {
      type: Number,
     required: true
    },

  }],
  { timestamps: true }
);

const cartModel = mongoose.model("Cart", cartSchema);
module.exports = cartModel;