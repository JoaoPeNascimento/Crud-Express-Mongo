const UserModel = require("../../models/user.models");
const { userSchema } = require("../../schemas/userSchema");

module.exports = (router) => {
  router.post("/user", async (req, res) => {
    const result = userSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).send(result.error.issues);
    }

    try {
      await UserModel.create(req.body);

      res.status(200).send("Usuário criado com sucesso!");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
};
