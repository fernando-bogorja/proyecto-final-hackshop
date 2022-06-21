const mongoose = require("moongose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  firstName: { String, max: 140 },
  password: { String, max: 140 },
  email: { String, max: 140 },
  created: { String, max: 140 },
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
