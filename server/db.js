const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "system",
  host: "localhost",
  port: 5432,
  database: "tododb",
});

module.exports = pool;
