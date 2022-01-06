var express = require('express');
var router = express.Router();
const userController = require("../controllers/users.controller");

/* GET users listing. */
router.route("/create")
.get(userController.addUser)
.post(userController.createUser)


module.exports = router;
