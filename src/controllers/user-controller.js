const UserService = require("../services/user-service");
const { StatusCodes } = require("http-status-codes");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const response = await userService.create({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
    });
    return res.status(StatusCodes.CREATED).json({
      data: response.data,
      success: true,
      message: "Successfully created User",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode).json({
      data: {},
      success: false,
      message: error.message,
      err: error.explanation,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const response = await userService.signIn(
      req.body.email,
      req.body.password
    );
    return res.status(StatusCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully Signed In.",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode).json({
      data: {},
      success: false,
      message: error.message,
      err: error.explanation,
    });
  }
};

const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const response = await userService.isAuthenticated(token);
    return res.status(StatusCodes.OK).json({
      data: response,
      success: true,
      message: "User is Authenticated",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_GATEWAY).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: error,
    });
  }
};

const getUser = async (req, res) => {
  try {
    console.log(req.params.id);
    const response = await userService.getById(req.params.id);
    return res.status(StatusCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully fetched User.",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_GATEWAY).json({
      data: {},
      success: false,
      message: "Cannot fetch User.",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await userService.updateUser(req.params.id, req.body);
    return res.status(StatusCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully Updated User.",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_GATEWAY).json({
      data: {},
      success: false,
      message: "Cannot Update User.",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await userService.destroyUser(req.params.id);
    return res.status(StatusCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully Deleted User.",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_GATEWAY).json({
      data: {},
      success: false,
      message: "Cannot Delete User.",
      err: error,
    });
  }
};

module.exports = {
  create,
  signIn,
  isAuthenticated,
  getUser,
  update,
  destroy,
};
