const express = require("express");

const router = express.Router();

const UserController = require("../../controllers/user-controller");
const { AuthValidators } = require("../../middlewares/index");

router.post("/signup", AuthValidators.validateUserAuth, UserController.create);
router.post("/signin", AuthValidators.validateUserAuth, UserController.signIn);
router.get(
  "/user/:id",
  AuthValidators.validateIsGetUserRequest,
  UserController.getUser
);
router.get("/isAuthenticated", UserController.isAuthenticated);

module.exports = router;
