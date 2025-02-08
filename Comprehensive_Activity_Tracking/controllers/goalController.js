const Goal = require("../models/Goal");
const {
  suggestAdaptiveGoal,
} = require("../services/recommendationService");

const createGoal = async (req, res) => {
  try {
    const { userId, type, target } = req.body;
    const goal = new Goal({ userId, type, target });
    await goal.save();
    res.status(201).json(goal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserGoals = async (req, res) => {
  try {
    const { userId } = req.params;
    const goals = await Goal.find({ userId });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const recommendGoals = async (req, res) => {
  try {
    const recommendations = await suggestAdaptiveGoal(req.params.userId);
    res.json(recommendations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createGoal, getUserGoals, recommendGoals };
