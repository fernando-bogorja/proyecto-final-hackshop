const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: { type: String, max: 100, required: true },
  lastName: { type: String, max: 100, required: true },
  email: { type: String, max: 50, required: true },
  password: { type: String, max: 50, required: true },
  address: { type: Schema.Types.ObjectId, ref: "Address" },
  phone: { type: String, max: 50, required: true, unique: true },
  orderList: { type: Schema.Types.ObjectId, ref: "Order" },
  isAdmin: { type: Boolean, default: false }
});

//Hook to hash the password with bcrypt.
userSchema.pre("save", async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
  return next();
});

//Export the schema as a models
const User = mongoose.model("User", userSchema);
module.exports = User;
