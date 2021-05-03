const { requestLogger } = require("./logger");
const reqHandler = (req, res, next) => {
  if (req.path == "/favicon.ico") return next();
  if (req.query.token) {
    requestLogger.log({
      level: "info",
      method: req.method,
      hostname: req.hostname,
      originalUrl: req.path,
      ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
    });
  } else
    requestLogger.log({
      level: "info",
      method: req.method,
      hostname: req.hostname,
      originalUrl: req.originalUrl,
      ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
    });
  return next();
};
module.exports = reqHandler;
