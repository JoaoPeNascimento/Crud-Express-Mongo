const UserModel = require("../../models/user.models");

module.exports = (router) => {
  router.get("/users/search/:firstName", async (req, res) => {
    try {
      const name = req.params.firstName;
      const users = await UserModel.find({
        firstName: { $regex: name, $options: "i" },
      });

      if (users.length < 1) {
        res.status(200).send("Usuário não encontrado!");
      } else {
        res.status(200).json(users);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
};
