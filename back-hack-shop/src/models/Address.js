const mongoose = require("moongose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  line1: { String, max: 140 },
  line2: { String, max: 140 },
  country: { String, max: 140 },
  zipCode: { String, max: 10 },
});

const Address = mongoose.model("Address", addressSchema);
module.exports = Address;
