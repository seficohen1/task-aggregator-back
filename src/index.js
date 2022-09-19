import app from "./server.js";
import connectDB from "./db/connect.js";
import CONFIG from "./conifg/config.js";
import dotenv from "dotenv";
dotenv.config();

// * uncomment this line in order to seed users
// import { seedUsers } from './db/seed.js'


connectDB().then(async function onServerInit() {
  CONFIG.development.logger.info("DB CONNECTED");

  // * uncomment this line in order to seed users
  // await seedUsers();

  app.listen(CONFIG.development.app.PORT, () => {
    CONFIG.development.logger.info(
      `Server running at http://localhost:${CONFIG.development.app.PORT}`,
    );
  });
});
