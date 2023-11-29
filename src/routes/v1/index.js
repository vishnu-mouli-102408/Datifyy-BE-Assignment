const express = require("express");

const router = express.Router();

const UserController = require("../../controllers/user-controller");
const { AuthValidators } = require("../../middlewares/index");
const limiter = require("../../utils/rateLimiter");

router.post("/signup", AuthValidators.validateUserAuth, UserController.create);
router.post("/signin", AuthValidators.validateUserAuth, UserController.signIn);
router.get(
  "/user/:id",
  AuthValidators.validateIsGetUserRequest,
  UserController.getUser
);
router.get("/isAuthenticated", limiter, UserController.isAuthenticated);
router.patch(
  "/user/:id",
  AuthValidators.validateUpdateUserRequest,
  UserController.update
);
router.delete(
  "/user/:id",
  AuthValidators.validateIsGetUserRequest,
  UserController.destroy
);

module.exports = router;
