const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["walking", "running", "cycling", "workout"],
    required: true,
  },
  distance: Number,
  duration: Number,
  caloriesBurned: Number,
  heartRate: Number,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Activity", activitySchema);
