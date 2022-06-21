const mongoose = require("moongose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { String, max: 50 },
});

//Export the schema as a model
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
