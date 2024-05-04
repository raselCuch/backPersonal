const mongoose = require("mongoose");

const ContratoSchema = mongoose.Schema({
  ContrModalidad: {
    type: String,
    required: true,
    maxlength: 100,
  },
  ContrFechInicio: {
    type: Date,
    required: true,
  },
  ContrFechFin: {
    type: Date,
    required: true,
  },
  ContrJornada: {
    type: String,
    required: true,
    maxlength: 100,
  },
  ContrSalario: {
    type: Number,
    required: true,
  },
});

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

  EmpGenero: {
    type: String,
    require: true,
    maxlength: 150,
  },

  EmpArea: {
    type: String,
    require: true,
    maxlength: 100,
  },

  EmpFechNacimiento: {
    type: Date,
    require: true,
  },

  EmpFechIngreso: {
    type: Date,
    require: true,
  },

  contrato: {
    type: ContratoSchema, // Aquí se hace referencia al esquema del contrato
    required: true,
  },
});

module.exports = mongoose.model("Empleado", EmpleadoSchema);
