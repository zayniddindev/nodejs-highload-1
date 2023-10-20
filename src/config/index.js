const { cleanEnv, str, num } = require("envalid");
require("dotenv").config();

const env = cleanEnv(process.env, {
  SERVER_PORT: num(),
  SERVER_HOST: str(),
  DB_HOST: str(),
  DB_PORT: num(),
  DB_USER: str(),
  DB_PASSWORD: str(),
  DB_NAME: str(),
});

module.exports = { env };
