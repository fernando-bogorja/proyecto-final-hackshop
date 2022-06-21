const express = require("express");
const publicRoutes = express.Router();

publicRoutes.get("/", (req, res) => {
  res.json("Hello World!!");
});

module.exports = publicRoutes;
