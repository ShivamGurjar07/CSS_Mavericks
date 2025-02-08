const Goal = require("../models/Goal");

const suggestAdaptiveGoal = async (userId) => {
  const goals = await Goal.find({ userId });

  const suggestions = goals.map((goal) => {
    if (goal.type === "dailySteps") {
      return { ...goal.toObject(), suggestedTarget: goal.target + 1000 };
    } else if (goal.type === "workoutFrequency") {
      return { ...goal.toObject(), suggestedTarget: goal.target + 1 };
    } else if (goal.type === "weightLoss") {
      return {
        ...goal.toObject(),
        suggestedTarget: Math.max(0, goal.target - 1),
      };
    }
    return goal;
  });

  return suggestions;
};
module.exports = { suggestAdaptiveGoal };
