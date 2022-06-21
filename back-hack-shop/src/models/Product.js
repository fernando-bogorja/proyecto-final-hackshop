const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, max: 100 },
  price: { type: String, max: 100 },
  image: [],
  description: { type: String, max: 50 },
  featured: { type: Boolean },
  stock: { type: String, max: 50 },
  createdAt: { type: String, max: 50 },
  slug: { type: String, max: 200 },
});

//Export the schema as a model
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
