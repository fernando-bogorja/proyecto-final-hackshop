const mongoose = require("moongose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { String, max: 100 },
  price: { String, max: 100 },
  image: [],
  description: { String, max: 50 },
  featured: { Boolean },
  stock: { String, max: 50 },
  createdAt: { String, max: 50 },
  slug: { String, max: 200 },
});

//Export the schema as a model
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
