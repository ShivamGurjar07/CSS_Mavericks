const Activity = require("../models/ExportsActivity");

const summarizedActivities = async (req, res) => {
  const { userId, month, year } = req.query;
  const startDate = new Date(year, month - 1, 1).getTime();
  const endDate = new Date(year, month, 0).getTime();

  try {
    const result = await Activity.aggregate([
      {
        $match: {
          userId: mongoose.Types.ObjectId(userId),
          timestamp: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: null,
          totalDistance: { $sum: "$distance" },
          totalCalories: { $sum: "$caloriesBurned" },
          totalDuration: { $sum: "$duration" },
        },
      },
    ]);

    res.json(
      result[0] || { totalDistance: 0, totalCalories: 0, totalDuration: 0 }
    );
  } catch (err) {
    res.status(500).json({ message: "Error fetching summarized data" });
  }
};

module.exports = {
  summarizedActivities,
};
