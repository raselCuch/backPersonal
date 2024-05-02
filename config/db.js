const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

require("dotenv").config({ path: "variables.env" });

const conectaDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {});
    console.log("Dase de datos conectada");
  } catch (error) {
    console.log(error);
    process.exit(1); //detener app
  }
};

module.exports = conectaDB;
