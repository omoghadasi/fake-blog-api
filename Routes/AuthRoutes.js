const express = require("express");
const router = express.Router();
const AuthController = require(`${config.path.controllers}/AuthController`);

const {
   validateRegisterUser
} = require('../middlewares/validators/userValidator');

router.post("/login", AuthController.login.bind(AuthController));
router.post("/register", validateRegisterUser, AuthController.register.bind(AuthController));

module.exports = router;