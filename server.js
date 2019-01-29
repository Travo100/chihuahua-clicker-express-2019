const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/chihuahuaDB", { useNewUrlParser: true });

// Define API routes here
app.get("/api/chihuahuas", (req, res)=> {
  db.Chihuahua
    .find({})
    .then(dbChihuahuas => res.json(dbChihuahuas))
    .catch(err => res.status(400).json(err));
});

app.post("/api/chihuahuas", (req, res)=> {
  db.Chihuahua
    .create(req.body)
    .then(dbChihuahuas => res.json(dbChihuahuas))
    .catch(err => res.status(400).json(err));
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
