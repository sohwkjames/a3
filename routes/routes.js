const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

// IAM endpoints
router.route("/login").post(authController.login);
router.route("/user").post(userController.create);

router.route("/user").put(userController.update);

module.exports = router;
