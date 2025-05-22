const { connectToDatabase } = require("./src/database/connect");
const dotenv = require("dotenv");
require("./src/routes/express");

dotenv.config();

connectToDatabase();
