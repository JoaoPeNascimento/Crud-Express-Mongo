const TaskModel = require("../../models/task.model");

module.exports = (router) => {
  router.post("/task", async (req, res) => {
    try {
      await TaskModel.create(req.body);
      res.status(200).send("Tarefa criada com sucesso!");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
};
