const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: { type: String, max: 100 },
  lastName: { type: String, max: 100 },
  email: { type: String, max: 50 },
  password: { type: String, max: 50 },
  address: { type: String, max: 100 },
  phone: { type: String, max: 50 },
  orderList: { type: Schema.Types.ObjectId, ref: "Order" },
});
userSchema.pre("save", async (next) => {
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
  next();
});

//Export the schema as a models
const User = mongoose.model("User", userSchema);
module.exports = User;
