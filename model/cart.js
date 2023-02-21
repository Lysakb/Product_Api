const mongoose = require("mongoose");
const productModel = require("./product");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    product_id: {
          type: String,
        //   required: true
        },
    
    quantity: {
        type: Number,
        required: true
    },
    
    modifiedOn: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);