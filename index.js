let remotes = [];
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());
app.use(cors());

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});

app.post("/api/uuid", (req, res) => {
  const remoteID = uuidv4();
  const dateTime = new Date();
  remotes.push({ remoteID, dateTime });
  res.json({ remoteID });
});
// app.post("/api/createRemote", (req, res) => {
//   console.log(`createRemote: ${req.body.remoteID}`);
//   remotes.push(req.body.remoteID);
//   res.json({ created: true });
// });
// app.post("/api/deleteRemote", (req, res) => {
//   console.log(`deleteRemote: ${req.body.remoteID}`);
//   remotes = remotes.filter((rid) => rid !== req.body.remoteID);
//   res.json({ deleted: true });
// });
// app.post("/api/getRemote", (req, res) => {
//   res.json({ exist: remotes.indexOf(req.body.remoteID) > -1 });
// });

app.get("/api/remotes", (req, res) => {
  res.json({ remotes });
});
// app.get("/api/clearRemotes", (req, res) => {
//   remotes = [];
//   res.json({ remotes });
// });

app.listen(process.env.PORT || 3000);
