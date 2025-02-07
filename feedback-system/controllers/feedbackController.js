const Feedback = require("../models/feedbackModel");

// Submit Feedback
const submitFeedback = async (req, res) => {
  try {
    const { user, rating, comment, featureUsed } = req.body;
    const feedback = await Feedback.create({ user, rating, comment, featureUsed });
    res.status(201).json({ message: "✅ Feedback submitted!", feedback });
  } catch (error) {
    res.status(500).json({ message: "❌ Error submitting feedback", error });
  }
};

// Get All Feedback
const getFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "❌ Error fetching feedback", error });
  }
};

// Get Feature Usage Analytics
const getFeatureUsage = async (req, res) => {
  try {
    const featureUsage = await Feedback.aggregate([
      { $group: { _id: "$featureUsed", count: { $sum: 1 } } }
    ]);
    res.status(200).json(featureUsage);
  } catch (error) {
    res.status(500).json({ message: "❌ Error fetching analytics", error });
  }
};

module.exports = { submitFeedback, getFeedback, getFeatureUsage };
