const express = require("express");
const publicRoutes = express.Router();
const { createUser, loginUser, getAllUsers } = require('../controllers/userController');
/* /api/ */

publicRoutes.get("/", (req, res) => {
  res.json("Hello World!!");
});

publicRoutes.post("/user/register", createUser);
publicRoutes.post("/user/login", loginUser);

publicRoutes.get('/user', getAllUsers);

module.exports = publicRoutes;
