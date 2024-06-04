const express = require("express");
const server = express();
const cors = require("cors");

const {
  initializeFirebaseAdmin,
  initializeMongoose,
} = require("./database/config");
require("dotenv").config();

server.use(cors());
server.use(express.json({ extended: false }));

initializeFirebaseAdmin();
initializeMongoose();

server.use("/api/client", require("./routes/client"));

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log("🚀 SERVER LISTENING ::", PORT);
});
