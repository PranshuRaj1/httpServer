import express from "express";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
const port = process.env.PORT || 3000;

// PostgreSQL connection pool
const pool = new Pool({
  user: "postgres",
  host: "db", // Docker service name for the database
  database: "testdb",
  password: "password",
  port: 5432,
});

app.get("/data", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ time: result.rows[0].now });
  } catch (error) {
    res.status(500).send("Database error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
