const TaskModel = require("../../models/task.model");
const { taskSchema } = require("../../schemas/taskSchema");

module.exports = (router) => {
  router.post("/task", async (req, res) => {
    const result = taskSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).send(result.error.errors);
    }

    try {
      await TaskModel.create(req.body);
      res.status(200).send("Tarefa criada com sucesso!");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
};
