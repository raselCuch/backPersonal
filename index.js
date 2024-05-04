const express = require("express");
const conectarDB = require("./config/db.js");
const cors = require("cors");

const app = express();

// conectar a base de datos
conectarDB();
app.use(cors());

app.use(express.json());

app.use("/api/empleados", require("./routes/empleado.js"));
app.use("/api/usuarios", require("./routes/usuario.js"));

app.listen(4000, () => {
  console.log("Servidor corriendo bien");
});
