const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Address Schema
const addressSchema = new Schema({
  line_one: { type: String, max: 140 },
  line_two: { type: String, max: 140 },
  country: { type: String, max: 140 },
  zipCode: { type: String, max: 10 },
  city: { type: String, max: 140 },
  department: { type: String, max: 140 },
  phone: { type: String, max: 10 },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

//Export the schema as a model
const Address = mongoose.model("Address", addressSchema);
module.exports = Address;
