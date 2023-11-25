let remotes = [];
const express = require("express");
const cors = require("cors");

const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});
app.post("/api/createRemote", (req, res) => {
  console.log(`createRemote: ${req.body.remoteID}`);
  remotes.push(req.body.remoteID);
  res.json({ created: true });
});
app.post("/api/getRemote", (req, res) => {
  res.json({ exist: remotes.indexOf(req.body.remoteID) > -1 });
});
app.get("/api/remotes", (req, res) => {
  res.json({ remotes });
});

app.listen(process.env.PORT || 3000);
