const express = require("express");
const publicRoutes = express.Router();
const { createUser, loginUser, getAllUsers } = require('../controllers/userController');
const { createOne, importProducts, getAllProducts, getProductByQuery, deleteAll, deleteOne } = require('../controllers/productController');
const { getPaymentMethodByQuery, createPaymentMethod, getAllPaymentMethods } = require('../controllers/paymentController');
const { getAllCategories, createCategory } = require('../controllers/categoryController');
const { createAddress, getAddress, getAllAddresses } = require('../controllers/addressController');
const { getOrders, createOrder } = require('../controllers/orderController');
/* /api/ */

publicRoutes.get("/", (req, res) => {
  res.json({
    message: "You are in the public API of RAIZEN",
    queries: {
      users: [
        "POST /api/user/register",
        "POST /api/user/login",
        "GET /api/user",
      ],
      products: [
        "POST /api/products/create",
        "POST /api/products/import",
        "GET /api/products",
        "GET /api/products/:get?param=value",
        "DELETE /api/products/delete",
        "DELETE /api/products/clear",
      ],
      paymentMethods: [
        "GET /api/payment",
        "POST /api/payment/create",
        "GET /api/payment/:get?param=value",
      ],
      categories: [
        "GET /api/category",
        "POST /api/category/create",
      ],
    }
  });
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
publicRoutes.post("/products/import", importProducts);
publicRoutes.delete("/products/clear", deleteAll);
publicRoutes.delete("/products/delete", deleteOne);
/* End Product Routes */

/* Begin Payment Method Routes */
publicRoutes.get('/payment', getAllPaymentMethods);
publicRoutes.post('/payment/create', createPaymentMethod);
publicRoutes.get('/payment/:action', getPaymentMethodByQuery);
/* End Payment Method Routes */

/* Begin Category Routes */
publicRoutes.get('/category', getAllCategories);
publicRoutes.post('/category/create', createCategory);
/* End Category Routes */

/* Begin Address Routes */
publicRoutes.get('/address', getAllAddresses);
publicRoutes.post('/address/create', createAddress);
publicRoutes.get('/address/:id', getAddress);
/* End Address Routes */

/* Begin Order Routes */
publicRoutes.get('/orders', getOrders);
publicRoutes.post('/orders/create', createOrder);
/* End Order Routes */


module.exports = publicRoutes;
