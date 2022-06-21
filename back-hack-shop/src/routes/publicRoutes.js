const express = require("express");
const publicRoutes = express.Router();
const { createUser, loginUser, getUsers } = require('../controllers/userController');
/* /api/ */

publicRoutes.get("/", (req, res) => {
  res.json("Hello World!!");
});

publicRoutes.post("/user/register", createUser);
publicRoutes.post("/user/login", loginUser);

publicRoutes.get('/user', getUsers);

module.exports = publicRoutes;
