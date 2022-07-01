const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const productSchema = new Schema({
  name: { type: String, max: 100 },
  price: { type: String, max: 100 },
  images: [],
  description: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  upholstery: { type: String, max: 100 },
  size: { type: String, max: 100 },
  made_in: { type: String, max: 100 },
  length: { type: String, max: 100 },
  depth: { type: String, max: 100 },
  tall: { type: String, max: 100 },
  featured: { type: Boolean },
  stock: { type: String, max: 50 },
  createdAt: Date,
  slug: { type: String, max: 200 },
});
//Product Slug
productSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

productSchema.pre("insertMany", function (next, products) {
  products.map(function (product) {
    product.slug = slugify(product.name, { lower: true });
  });
  next();
});

//Export the schema as a model
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
