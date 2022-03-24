export const LogLevel = {
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};
export const Logger = (message, logLevel = LogLevel.INFO) => {
  switch (logLevel) {
    case LogLevel.WARN:
      console.warn(message);
      break;
    case LogLevel.ERROR:
      console.error(message);
      break;
    default:
      console.info(message);
  }
};
