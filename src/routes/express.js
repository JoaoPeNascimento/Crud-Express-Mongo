const express = require("express");
const UserModel = require("../models/user.models");
const TaskModel = require("../models/task.model");

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    if (users.length === 0) {
      res.status(200).send("Nenhum usuário cadastrado!");
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);

    if (!user) {
      res.status(200).send("Usuário não encontrado!");
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users/search/:firstName", async (req, res) => {
  try {
    const name = req.params.firstName;
    const users = await UserModel.find({
      firstName: { $regex: name, $options: "i" },
    });

    if (users.length < 1) {
      res.status(200).send("Usuário não encontrado!");
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/user", async (req, res) => {
  try {
    await UserModel.create(req.body);

    res.status(200).send("Usuário criado com sucesso!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    if (!user) {
      res.status(200).send("Usuário não encontrado!");
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);

    if (!user) {
      res.status(200).send("Usuário não encontrado!");
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users", async (req, res) => {
  try {
    await UserModel.deleteMany({});
    res.status(200).send("Usuários deletados!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/task", async (req, res) => {
  try {
    await TaskModel.create(req.body);
    res.status(200).send("Tarefa criada com sucesso!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await TaskModel.find({});

    if (tasks.length === 0) {
      res.status(200).send("Nenhuam task cadastrada!");
    } else {
      res.status(200).json(tasks);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/task/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await TaskModel.findById(id);

    if (!task) {
      res.status(200).send("Tarefa não encontrada!");
    } else {
      res.status(200).json(task);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/task/:id/users", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await TaskModel.findById(id);
    const users = await UserModel.find({ _id: { $in: task.user } });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/task/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await TaskModel.findByIdAndUpdate(id, req.body, { new: true });

    if (!task) {
      res.status(200).send("Tarefa não encontrada!");
    } else {
      res.status(200).json(task);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/task/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await TaskModel.findByIdAndDelete(id);

    if (!task) {
      res.status(200).send("Tarefa não encontrada!");
    } else {
      res.status(200).json(task);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/tasks", async (req, res) => {
  try {
    await TaskModel.deleteMany({});

    res.status(200).send("Tarefas deletadas!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/task/:id/user/:userId", async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.params.userId;

    const task = await TaskModel.findById(id);
    const user = await UserModel.findById(userId);
    const userIndex = task.user.indexOf(userId);
    task.user.splice(userIndex, 1);
    await task.save();
    await user.save();
    res.status(200).send("Usuário removido da tarefa!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log("servidor iniciado!"));
