const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, max: 50 },
});

//Export the schema as a model
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
