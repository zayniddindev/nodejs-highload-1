const { pool } = require("..");

async function createUser() {
  console.log("Connecting to database");
  await pool.connect();
  console.log("Connected to database successfully!");

  console.log("Running migration");
  await pool.query(`
    DROP TABLE IF EXISTS users;
    CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        balance DECIMAL(10, 2)
    );
    INSERT INTO users(id, balance) VALUES(1, 10000);
  `);
  console.log("Migration completed successfully!");
}

module.exports = { createUser };
