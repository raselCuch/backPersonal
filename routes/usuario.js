const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController.js");

router.post("/", usuarioController.crearUsuario);
router.get("/", usuarioController.obtenerUsuarios);
router.delete("/:id", usuarioController.eliminarUsuario);

module.exports = router;