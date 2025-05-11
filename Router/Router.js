const express = require("express");
const router = express.Router();
const controller = require("../Contoller/controller")
router.route("/").get(controller.home);
router.route("/register").post(controller.register)
module.exports = router;
