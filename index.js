const express = require("express");
const app = express();
const routes = require("./src/routes");

const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

app.use(express.json());
app.use("/", routes);

const port = 8080;
app.listen(port, () => console.log("Servidor iniciado na porta", port));
// require("./src/routes/express");
