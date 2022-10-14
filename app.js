import dotenv from "dotenv";
import mysql from "mysql";
import express from "express";

// GET DB Access credentials
dotenv.config();
const pool = mysql.createPool({
  poolLimit: 10,
  host: process.env.BSALE_DB_HOST,
  database: process.env.BSALE_DB_NAME,
  user: process.env.BSALE_DB_USER,
  password: process.env.BSALE_DB_PASSWD,
});

const app = express();

// GET the list of all products
app.get("/products/", (req, res) => {
  pool.query("SELECT * FROM product", (err, rows, fields) => {
    if (err) throw err;
    res.json({ products: rows });
  });
});

// GET all products with a similar name
app.get("/products/:name", (req, res) => {
  let name = req.params.name;
  pool.query(
    `SELECT * FROM product WHERE product.name LIKE ${pool.escape(name)}`,
    (err, rows, fields) => {
      if (err) throw err;
      res.json({ products: rows });
    }
  );
});

// GET a product by ID
app.get("/product/:id", (req, res) => {
  let id = req.params.id;
  if (!id) res.json({});
  pool.query(
    `SELECT * FROM product WHERE product.id = ${pool.escape(id)}`,
    (err, rows, fields) => {
      if (err) throw err;
      res.json({ product: rows[0] });
    }
  );
});

// GET a product belonging to a category
app.get("/products/category/:id", (req, res) => {
  let categoryId = req.params.id;
  pool.query(
    `SELECT * FROM product WHERE product.category = ${pool.escape(categoryId)}`,
    (err, rows, fields) => {
      if (err) throw err;
      res.json({ products: rows });
    }
  );
});

// GET ALL categories
app.get("/categories/", (req, res) => {
  pool.query("SELECT * FROM category", (err, rows, fields) => {
    if (err) throw err;
    res.json({ categories: rows });
  });
});

// GET a category by ID
app.get("/category/:id", (req, res) => {
  let id = req.params.id;
  pool.query(
    `SELECT * FROM category WHERE category.id = ${pool.escape(id)}`,
    (err, rows, fields) => {
      if (err) throw err;
      res.json({ category: rows[0] });
    }
  );
});

app.listen(process.env.PORT || 3000);
