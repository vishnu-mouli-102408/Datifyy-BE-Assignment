const clientSideErrorCodes = Object.freeze({
  BAD_REQUEST: 400,
  UNAUTHORISED: 401,
  NOT_FOUND: 404,
});

const serverSideErrorCodes = Object.freeze({
  INTERNAL_SERVER_ERROT: 500,
  NOT_IMPLEMENTED: 501,
});

const successCodes = Object.freeze({
  OK: 200,
  CREATED: 201,
});

module.exports = {
  clientSideErrorCodes,
  serverSideErrorCodes,
  successCodes,
};
