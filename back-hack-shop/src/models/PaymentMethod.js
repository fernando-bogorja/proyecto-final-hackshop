const mongoose = require("moongose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  name: { String, max: 100 },
});

//Export the schema as a model
const PaymentMethod = mongoose.model("PaymentMethod", paymentSchema);
module.exports = PaymentMethod;
