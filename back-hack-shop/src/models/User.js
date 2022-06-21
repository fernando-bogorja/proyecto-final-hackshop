const mongoose = require("moongose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: { String, max: 100 },
  lastName: { String, max: 100 },
  email: { String, max: 50 },
  password: { String, max: 50 },
  address: { String, max: 100 },
  phone: { String, max: 50 },
  orderList: { type: Schema.Types.ObjectId, ref: "Order" },
});
userSchema.pre("save", async (next) => {
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
