const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
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
