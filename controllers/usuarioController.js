const Usuario = require("../models/usuario.js");

exports.crearUsuario = async (req, res) => {
  try {
    let usuario;
    usuario = new Usuario(req.body);

    await usuario.save();
    res.send(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.eliminarUsuario = async (req, res) => {
  try {
    let usuario = await Usuario.findById(req.params.id);

    if (!usuario) {
      res.status(404).json({ msg: "No existe el empleado" });
    }

    await Usuario.findOneAndDelete({ _id: req.params.id });

    res.json({ msg: "Producto eliminado con exito" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.iniciarSesion = async (req, res) => {
  const { UsuCorreo, UsuContrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({ UsuCorreo });

    if (usuario && usuario.UsuContrasena === UsuContrasena) {
      if (usuario.UsuRol === "Administrador") {
        res.json({
          message: "Inicio de sesión exitoso como administrador",
          // usuario,
          isAdmin: true,
        });
      } else {
        res.json({
          message: "Inicio de sesión exitoso",
          // usuario,
          isAdmin: false,
        });
      }
    } else {
      res
        .status(401)
        .json({ message: "Correo electrónico o contraseña incorrectos" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
