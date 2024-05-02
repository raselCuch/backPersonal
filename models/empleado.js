const mongoose = require("mongoose");

const EmpleadoSchema = mongoose.Schema({
  EmpDni: {
    type: String,
    require: true,
    maxlength: 8,
  },
  EmpNombre: {
    type: String,
    require: true,
    maxlength: 150,
  },
  EmpApPaterno: {
    type: String,
    require: true,
    maxlength: 150,
  },
  EmpApMaterno: {
    type: String,
    require: true,
    maxlength: 150,
  },
  EmpFechNacimiento: {
    type: Date,
    require: true,
  },
});

module.exports = mongoose.model("Empleado", EmpleadoSchema);
