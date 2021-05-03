const { errLogger } = require("./logger");
/**
 * @description Handle error
 */
const errHandler = (err, req, res, next) => {
  if (err.code)
    errLogger.error({
      name: err.name,
      message: err.message,
    });
  else if (err.message)
    errLogger.error({
      name: err.name,
      message: err.message,
      stack: err.stack,
    });
  else
    errLogger.error({
      type: "error",
      message: err,
    });
  return res.sendStatus(500);
};
module.exports = errHandler;
