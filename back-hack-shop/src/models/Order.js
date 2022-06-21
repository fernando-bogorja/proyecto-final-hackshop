const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  status: { type: String, max: 100 },
  createdAt: Date,
  shopList: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  total: { type: String, max: 100 },
  boughtBy: { type: Schema.Types.ObjectId, ref: "User" },
});

//Export the schema as a model
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
