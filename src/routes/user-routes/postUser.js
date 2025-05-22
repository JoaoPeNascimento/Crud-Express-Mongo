const UserModel = require("../../models/user.models");

module.exports = (router) => {
  router.post("/user", async (req, res) => {
    try {
      await UserModel.create(req.body);

      res.status(200).send("Usuário criado com sucesso!");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
};
