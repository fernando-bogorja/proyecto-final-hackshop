const express = require("express");
const publicRoutes = express.Router();
const { createUser, loginUser, getAllUsers } = require('../controllers/userController');
const { createOne, getAllProducts, getProductByQuery } = require('../controllers/productController');
/* /api/ */

publicRoutes.get("/", (req, res) => {
  res.json("Hello World!!");
});

/* Begin User Routes */
publicRoutes.post("/user/register", createUser);
publicRoutes.post("/user/login", loginUser);
publicRoutes.get('/user', getAllUsers);
/* End User Routes */

/* Begin Product Routes */
publicRoutes.get('/products', getAllProducts);
publicRoutes.get('/products/:action', getProductByQuery);
publicRoutes.post("/products/create", createOne);
/* End Product Routes */


module.exports = publicRoutes;
