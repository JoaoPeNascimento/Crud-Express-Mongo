const UserModel = require("../../models/user.models");
const TaskModel = require("../../models/task.model");

module.exports = (router) => {
  router.delete("/task/:id/user/:userId", async (req, res) => {
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
};
