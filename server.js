// server.js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
  return res.json({
    success:"OK THIS IS NEW MESSAGE",
    description:"I am from home route"
  })
})
app.get('/health',async(req,res)=>{
  return res.json({
    success:"OK",
    description:"My health is okay. I am ready to play something beautiful"
  })
})

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
