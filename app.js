import dotenv from "dotenv";
import mysql from "mysql";

// GET DB Access credentials
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWD,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});
