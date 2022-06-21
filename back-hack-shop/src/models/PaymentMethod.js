const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  name: { type: String, max: 100 },
});

//Export the schema as a model
const PaymentMethod = mongoose.model("PaymentMethod", paymentSchema);
module.exports = PaymentMethod;
