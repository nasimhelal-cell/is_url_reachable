// server.js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/check-url", async (req, res) => {
  const { url } = req.body;
  try {
    await fetch(url, { method: "HEAD" });
    res.json({ reachable: true, url });
  } catch {
    res.json({ reachable: false, url });
  }
});

app.listen(5000, () => {
  console.log("Server running locally on http://localhost:5000");
});
