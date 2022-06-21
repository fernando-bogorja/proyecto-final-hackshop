const mongoose = require("moongose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { String, max: 50 },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
