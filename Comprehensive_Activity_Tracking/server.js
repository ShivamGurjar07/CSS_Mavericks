require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const activityRoutes = require("./routes/activityRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

connectDB();

app.use(bodyParser.json());

app.use("/api/activities", activityRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
