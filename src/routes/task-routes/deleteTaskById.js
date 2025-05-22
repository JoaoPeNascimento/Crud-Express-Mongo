const TaskModel = require("../../models/task.model");

module.exports = (router) => {
  router.delete("/task/:id", async (req, res) => {
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
};
