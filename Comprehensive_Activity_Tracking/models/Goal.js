const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["dailySteps", "workoutFrequency", "weightLoss"],
    required: true,
  },
  target: {
    type: Number,
    required: true,
  },
  achieved: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Goal", goalSchema);
