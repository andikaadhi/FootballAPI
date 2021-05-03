const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, json, printf } = format;

const requestFormat = printf(({ level, label, timestamp, ...info }) => {
  return `${timestamp} ${label} [${level}] : ${info.method} ${info.hostname} ${info.originalUrl} ${info.ip}`;
});

const errFormat = printf(({ level, label, timestamp, ...info }) => {
  return `${timestamp} ${label} [${level}] : ${info.name} ${info.message} ${info.stack}`;
});

/**
 * @description Generalized logging handle all unspecify log.
 */
const logger = createLogger({
  format: combine(timestamp(), json()),
  transports: [new transports.Console()],
});
/**
 * @description Log all endpoint requested from client.
 */
const requestLogger = createLogger({
  format: combine(
    label({ label: "Req" }),
    format.colorize(),
    timestamp(),
    format.align(),
    requestFormat
  ),
  transports: [new transports.Console()],
});
const errLogger = createLogger({
  format: combine(
    label({ label: "Error" }),
    format.colorize(),
    timestamp(),
    format.align(),
    errFormat
  ),
  transports: [new transports.Console()],
});

module.exports = {
  logger,
  requestLogger,
  errLogger,
};
