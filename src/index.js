const express = require("express");
const { createUser } = require("./db/migrations/user.migration");
const { userRoutes } = require("./routes/user.routes");
const { env } = require("./config");

async function start() {
  const app = express();

  app.use(express.json());
  app.use("/user", userRoutes);

  // migration
  await createUser();

  app.listen(env.SERVER_PORT, env.SERVER_HOST, () => console.log(`Server listening on port ${env.SERVER_PORT}`));
}

start();
