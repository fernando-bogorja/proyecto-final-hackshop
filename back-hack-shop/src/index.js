require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const APP_PORT = process.env.APP_PORT;
app.use(express.json());
app.use(cors());
const routes = require("./routes");
routes(app);
app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
