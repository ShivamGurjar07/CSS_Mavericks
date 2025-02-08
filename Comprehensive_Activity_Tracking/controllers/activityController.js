const Activity = require("../models/ExportsActivity");

const logActivity = async (req, res) => {
  try {
    const activity = new Activity(req.body);
    await activity.save();
    res
      .status(201)
      .json({ message: "Activity logged successfully!", activity });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const logMultipleActivities = async (req, res) => {
  try {
    const activities = req.body.activities;
    if (!Array.isArray(activities)) {
      return res
        .status(400)
        .json({ error: "Invalid data format. Expected an array." });
    }
    const savedActivities = await Activity.insertMany(activities);
    res
      .status(201)
      .json({ message: "Activities logged successfully!", savedActivities });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  logActivity,
  logMultipleActivities,
  getAllActivities,
};

// merge done
