const AppErrors = require("./error-handlers");
const { StatusCodes } = require("http-status-codes");

class ValidationErrors extends AppErrors {
  constructor(error) {
    let errorName = error.name;
    let explanation = [];
    error.errors.forEach((err) => {
      explanation.push(err.message);
    });
    super(
      errorName,
      "Not able to Validate the data send in request",
      explanation,
      StatusCodes.BAD_REQUEST
    );
  }
}

module.exports = ValidationErrors;
