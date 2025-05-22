const express = require("express");
const router = express.Router();

require("./task-routes/getAllTasks")(router);
require("./task-routes/getTaskById")(router);
require("./task-routes/getUsersInTask")(router);
require("./task-routes/postTask")(router);
require("./task-routes/putTaskById")(router);
require("./task-routes/deleteAllTasks")(router);
require("./task-routes/deleteTaskById")(router);
require("./task-routes/deleteTaskUser")(router);

module.exports = router;
