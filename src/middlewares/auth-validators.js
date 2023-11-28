const validateUserAuth = async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: "Email or Password is missing.",
    });
  }
  next();
};

const validateIsGetUserRequest = async (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: "Cannot get User",
    });
  }
  next();
};

module.exports = {
  validateUserAuth,
  validateIsGetUserRequest,
};
