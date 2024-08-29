const express = require("express");
const authcontrollers = require("../controllers/auth-controller");
const router = express.Router();
const validatorMiddleware = require("../middlewares/validate-middleware");
const zodvalidator = require("../validators/auth-validator");
// data we get from the controller
router.route("/").get(authcontrollers.home);

router.route("/register").post(validatorMiddleware.validate(zodvalidator.signupSchema) , authcontrollers.register);
router.route("/login").post(validatorMiddleware.loginValid(zodvalidator.signinSchema),  authcontrollers.login);
module.exports = router;
