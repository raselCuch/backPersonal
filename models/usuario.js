const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema({
  UsuNombreUsuario: {
    type: String,
    required: true,
    maxlength: 100,
  },
  UsuCorreo: {
    type: String,
    required: true,
  },
  UsuContrasena: {
    type: String,
    required: true,
  },
  UsuRol: {
    type: String,
    required: true,
    maxlength: 100,
  },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
