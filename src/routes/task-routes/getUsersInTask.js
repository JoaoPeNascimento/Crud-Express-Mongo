const TaskModel = require("../../models/task.model");
const UserModel = require("../../models/user.models");

module.exports = (router) => {
  router.get("/task/:id/users", async (req, res) => {
    try {
      const id = req.params.id;
      const task = await TaskModel.findById(id);
      const users = await UserModel.find({ _id: { $in: task.user } });

      res.status(200).json(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
};
