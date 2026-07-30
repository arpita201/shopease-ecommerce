const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
   stock: {
  type: Boolean,
  required: true,
  default: true,
}
    },
  
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);