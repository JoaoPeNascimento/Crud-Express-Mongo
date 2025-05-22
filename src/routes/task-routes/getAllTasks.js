const TaskModel = require("../../models/task.model");

module.exports = (router) => {
  router.get("/tasks", async (req, res) => {
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
};
