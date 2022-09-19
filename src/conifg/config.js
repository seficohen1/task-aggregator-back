/* TODO: creating a config file the contains: 
1. app port
2. client port
3. secret keys form process.env */

import dotenv from "dotenv";
import logger from "loglevel";

dotenv.config();

const ENV = process.env.NODE_ENV || "development";

const CONFIG = {
  production: {},
  development: {
    app: {
      PORT: process.env.PORT || 4001,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: process.env.DB_URL,
    },
  },
  test: {},
};

export default CONFIG;
