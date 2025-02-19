import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "recipe_app",
});

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

// User Sign-Up
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const sql = "INSERT INTO users (email, password) VALUES (?, ?)";

    db.query(sql, [email, hashedPassword], (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(400).send("Email already exists.");
        }
        return res.status(500).send("Error registering user.");
      }
      res.status(201).send("User registered successfully.");
    });
  } catch (error) {
    res.status(500).send("Server error.");
  }
});

// User Sign-In
app.post("/signin", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).send("Error fetching user.");
    if (results.length === 0) return res.status(404).send("User not found.");

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send("Invalid credentials.");
    }

    // Generate a token for authentication
    const token = jwt.sign({ id: user.id }, "secret_key", { expiresIn: "1h" });
    res.status(200).json({ message: "Sign-in successful", token });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

