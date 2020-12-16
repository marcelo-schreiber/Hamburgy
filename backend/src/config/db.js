const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  user: "postgres",
  password: process.env.SENHA,
  database: "hamburgy2",
  host: "localhost",
  port: 5432,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL,
};

const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);

module.exports = pool;
