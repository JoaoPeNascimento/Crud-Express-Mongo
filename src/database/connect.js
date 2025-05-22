const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@estudonode.byxxtys.mongodb.net/?retryWrites=true&w=majority&appName=EstudoNod`
    );

    console.log("Conexão com o banco de dados realizada!");
  } catch (error) {
    console.log("Erro ao se conectar com o banco de dados:", error);
  }
};

module.exports = connectToDatabase;
