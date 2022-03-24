export const LogLevelEnum = {
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};
export const Logger = (message, logLevel = LogLevelEnum.INFO) => {
  switch (logLevel) {
    case LogLevelEnum.WARN:
      console.warn(message);
      break;
    case LogLevelEnum.ERROR:
      console.error(message);
      break;
    default:
      console.info(message);
  }
};
