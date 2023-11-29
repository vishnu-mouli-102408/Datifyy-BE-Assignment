const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 5,
  message: "You have exceeded your 5 requests per 2 minutes limit.",
  headers: true,
});

module.exports = limiter;
