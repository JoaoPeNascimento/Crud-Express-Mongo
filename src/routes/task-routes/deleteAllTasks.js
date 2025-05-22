const TaskModel = require("../../models/task.model");

module.exports = (router) => {
  router.delete("/tasks", async (req, res) => {
    try {
      await TaskModel.deleteMany({});

      res.status(200).send("Tarefas deletadas!");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
};
