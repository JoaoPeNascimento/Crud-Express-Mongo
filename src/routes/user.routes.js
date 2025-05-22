const express = require("express");
const router = express.Router();

require("./user-routes/getAllUsers")(router);
require("./user-routes/getById")(router);
require("./user-routes/getByFirstName")(router);
require("./user-routes/postUser")(router);
require("./user-routes/putUserById")(router);
require("./user-routes/deleteAllUsers")(router);
require("./user-routes/deleteUserById")(router);

module.exports = router;
