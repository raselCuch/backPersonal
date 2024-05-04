const Empleado = require("../models/empleado.js");

exports.crearEmpleado = async (req, res) => {
  try {
    let empleado;
    empleado = new Empleado(req.body);

    await empleado.save();
    res.send(empleado);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.actualizarEmpleado = async (req, res) => {
  try {
    const { EmpDni, EmpNombre, EmpApPaterno, EmpApMaterno, EmpFechNacimiento } =
      req.body;
    let empleado = await Empleado.findById(req.params.id);

    if (!empleado) {
      res.status(404).json({ msg: "No existe el empleado" });
    }
    
    empleado.EmpDni = EmpDni;
    empleado.EmpNombre = EmpNombre;
    empleado.EmpApPaterno = EmpApPaterno;
    empleado.EmpApMaterno = EmpApMaterno;
    empleado.EmpFechNacimiento = EmpFechNacimiento;

    empleado = await Empleado.findOneAndUpdate(
      { _id: req.params.id },
      empleado,
      { new: true }
    );

    res.json(empleado);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerEmpleado = async (req, res) => {
  try {
    let empleado = await Empleado.findById(req.params.id);

    if (!empleado) {
      res.status(404).json({ msg: "No existe el empleado" });
    }

    res.json(empleado);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.eliminarEmpleado = async (req, res) => {
  try {
    let empleado = await Empleado.findById(req.params.id);

    if (!empleado) {
      res.status(404).json({ msg: "No existe el empleado" });
    }
    await Empleado.findOneAndDelete({ _id: req.params.id });

    res.json({ msg: "Producto eliminado con exito" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
