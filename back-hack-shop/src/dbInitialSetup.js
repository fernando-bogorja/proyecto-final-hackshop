const mongoose = require("mongoose");
const db = process.env.DB_DATABASE;
const Address = require("./models/Address");
const Category = require("./models/Category");
const Order = require("./models/Order");
const PaymentMethod = require("./models/PaymentMethod");
const Product = require("./models/Product");
const User = require("./models/User");

//Create the database connection
mongoose.connect(`mongodb+srv://root:root@raizen-db.po6f3ko.mongodb.net/${db}`);
mongoose.connection
  .once("open", () => console.log("\n[MongoDB] Database connection successfull"))
  .on("error", (error) => console.log(error));

module.exports = {
  Address,
  Category,
  Order,
  PaymentMethod,
  Product,
  User,
};
