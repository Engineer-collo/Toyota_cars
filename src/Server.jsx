const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let messages = []; // Store messages in memory

app.post("/contact", (req, res) => {
  messages.push(req.body);
  console.log("New Message:", req.body);
  res.json({ message: "Message sent to admin!" });
});

app.get("/admin/messages", (req, res) => {
  res.json(messages);
});

app.listen(8001, () => console.log("Server running on http://localhost:8001"));
