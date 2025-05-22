const UserModel = require("../../models/user.models");

module.exports = (router) => {
  router.delete("/users", async (req, res) => {
    try {
      await UserModel.deleteMany({});
      res.status(200).send("Usuários deletados!");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
};
