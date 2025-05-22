const express = require("express");
const UserModel = require("../models/user.models");
const TaskModel = require("../models/task.model");

const app = express();

app.use(express.json());

const port = 8080;

app.listen(port, () => console.log("servidor iniciado!"));
