const rateLimit = require("express-rate-limit");

const rateLimiter = (limit, timeInMintues) => {
  return rateLimit({
    max: limit,
    windowMs: timeInMintues * 60 * 100,
    message: {
      error: {
        status: 429,
        message: "TOO_MANY_REQUESTS",
        expiry: timeInMintues,
      },
    },
  });
};

module.exports = rateLimiter;
