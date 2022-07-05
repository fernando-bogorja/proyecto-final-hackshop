const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, max: 50 },
  description: { type: String, max: 300 },
});

//Export the schema as a model
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
