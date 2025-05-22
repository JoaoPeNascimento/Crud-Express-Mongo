const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
const taskRoutes = require("./task.routes");

router.use(userRoutes);
router.use(taskRoutes);

module.exports = router;
