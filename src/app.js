const express = require("express");
const songRoutes = require("./routes/song.route");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "https://comforting-selkie-d4db40.netlify.app", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use("/", songRoutes);

module.exports = app;
