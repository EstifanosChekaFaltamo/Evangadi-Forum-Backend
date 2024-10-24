const mysql2 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config()
const dbConnection = mysql2.createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
  host: process.env.HOST,
  // host: "localhost",
  // port: process.env.DB_PORT,
  password: process.env.PASSWORD,
  connectionLimit: 10,
});

// const dbConnection = mysql2.createPool({
//   user: process.env.MYSQL_ADDON_USER,
//   database: process.env.MYSQL_ADDON_DB,
//   host: process.env.MYSQL_ADDON_HOST,
//   password: process.env.MYSQL_ADDON_PASSWORD,
//   connectionLimit: 10,
// });



module.exports = dbConnection.promise();