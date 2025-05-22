const UserModel = require("../../models/user.models");

module.exports = (router) => {
  router.get("/users", async (req, res) => {
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
};
