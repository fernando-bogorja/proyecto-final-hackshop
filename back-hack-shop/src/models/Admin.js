const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  firstName: { type: String, max: 140 },
  password: { type: String, max: 140 },
  email: { type: String, max: 140 },
  created: { type: String, max: 140 },
});

//Export the schema as a model
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
