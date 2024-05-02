const express = require("express");
const conectarDB = require("./config/db.js");

const app = express();

// conectar a base de datos
conectarDB();

app.use(express.json());

app.use("/api/empleados", require("./routes/empleado.js"));

app.listen(4000, () => {
  console.log("Servidor corriendo bien");
});
