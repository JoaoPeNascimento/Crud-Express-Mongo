const UserModel = require("../../models/user.models");

module.exports = (router) => {
  router.put("/user/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (!user) {
        res.status(200).send("Usuário não encontrado!");
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
};
