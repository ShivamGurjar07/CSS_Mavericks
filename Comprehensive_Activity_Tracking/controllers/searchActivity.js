const Activity = require("../models/ExportsActivity");

const searchActivity = async (req, res) => {
  const {
    startDate,
    endDate,
    activityType,
    minDistance,
    maxDistance,
    minCalories,
    maxCalories,
  } = req.query;

  const query = {};

  if (startDate && endDate) {
    query.timestamp = {
      $gte: new Date(startDate).getTime(),
      $lte: new Date(endDate).getTime(),
    };
  }

  if (activityType) {
    query.type = activityType;
  }

  if (minDistance || maxDistance) {
    query.distance = {};
    if (minDistance) query.distance.$gte = minDistance;
    if (maxDistance) query.distance.$lte = maxDistance;
  }

  if (minCalories || maxCalories) {
    query.caloriesBurned = {};
    if (minCalories) query.caloriesBurned.$gte = minCalories;
    if (maxCalories) query.caloriesBurned.$lte = maxCalories;
  }

  try {
    const activity = await Activity.find(query);
    res.json(activity);
  } catch (err) {
    res.status(500).json({ message: "Error fetching activity logs" });
  }
};

module.exports = {
  searchActivity,
};
