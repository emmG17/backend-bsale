import dotenv from "dotenv";
import mysql from "mysql";
import express from "express";

// GET DB Access credentials
dotenv.config();
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWD,
});

const app = express();

app.get("/allProducts", (req, res) => {
  connection.connect();
  connection.query("SELECT * FROM product", (err, rows, fields) => {
    connection.end();
    if (err) throw err;
    res.json({ products: rows });
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
