const moongose = require("moongose");
const db = process.env.DB_DATABASE;
const Address = require("./models/Address");
const Admin = require("./models/Admin");
const Category = require("./models/Category");
const Order = require("./models/Order");
const PaymentMethod = require("./models/PaymentMethod");
const Product = require("./models/Product");
const User = require("./models/User");

moongose.connect(`mongodb://localhost/${db}`);

moongose.connection
  .once("open", () => {
    console.log("Database connection successfull");
  })
  .on("error", (error) => {
    console.log(error);
  });

module.exports = {
  Address,
  Admin,
  Category,
  Order,
  PaymentMethod,
  Product,
  User,
};