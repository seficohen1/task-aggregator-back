import app from "./server.js";
import connectDB from "./db/connect.js";
import CONFIG from "./conifg/config.js";

// * uncomment this line in order to seed users
import { seedUsers, seedTasks } from "./db/seed.js";

connectDB().then(async function onServerInit() {
  CONFIG.development.logger.info("DB CONNECTED");

  // * uncomment this line in order to seed users
  await seedTasks();

  app.listen(CONFIG.development.app.PORT, () => {
    CONFIG.development.logger.info(
      `Server running at http://localhost:${CONFIG.development.app.PORT}`,
    );
  });
});
