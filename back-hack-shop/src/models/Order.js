const mongoose = require("moongose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  status: { String, max: 100 },
  createdAt: { String, max: 100 },
  shopList: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  total: { String, max: 100 },
  boughtBy: { type: Schema.Types.ObjectId, ref: "User" },
});

//Export the schema as a model
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
