const rateLimit = require("express-rate-limit");

const time = {
  oneSecond: 1000,
  oneMinute: 1000 * 60,
  oneHour: 1000 * 60 * 60,
  oneDay: 1000 * 60 * 60 * 24,
};

const maxRequests = 3;
const maxTimeout = time.oneMinute;

const rateLimiterUsingThirdParty = rateLimit({
  windowMs: maxTimeout, // 24 hrs in milliseconds
  max: maxRequests,
  statusCode: 200,
  message: {
    message: `You have exceeded the ${maxRequests} requests in ${
      maxTimeout / 1000
    } seconds limit!`,
    status: true,
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = rateLimiterUsingThirdParty;
