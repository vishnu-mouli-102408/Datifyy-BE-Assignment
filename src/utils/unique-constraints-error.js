const AppErrors = require("./error-handlers");
const { StatusCodes } = require("http-status-codes");

class UniqueConstraintsError extends AppErrors {
  constructor(error) {
    let errorName = error.name;
    let explanation = [];
    error.errors.forEach((err) => {
      explanation.push(err.message);
    });
    super(
      errorName,
      "duplicate key value violates unique constraint",
      explanation,
      StatusCodes.BAD_REQUEST
    );
  }
}

module.exports = UniqueConstraintsError;
