require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const activityRoutes = require("./routes/activityRoutes");
const exportRoutes = require("./routes/exportRoutes");
const goalRoutes = require("./routes/goalRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

connectDB();
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/activities", activityRoutes);
app.use("/api/exports", exportRoutes);
app.use("/api/goals", goalRoutes);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
