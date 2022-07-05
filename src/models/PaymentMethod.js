const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  name: { type: String, max: 100 },
  icon: { type: String, max: 200 },
  description: { type: String, max: 300 },

});

//Export the schema as a model
const PaymentMethod = mongoose.model("PaymentMethod", paymentSchema);
module.exports = PaymentMethod;
