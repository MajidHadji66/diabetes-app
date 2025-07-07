const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Temporary in-memory journal storage
let journalEntries = [];

// Get all entries
app.get("/api/journal", (req, res) => {
  res.json(journalEntries);
});

// Add new entry
app.post("/api/journal", (req, res) => {
  const entry = {
    date: new Date().toISOString(),
    note: req.body.note,
  };
  journalEntries.unshift(entry);
  res.status(201).json(entry);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
