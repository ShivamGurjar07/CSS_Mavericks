const express = require("express");
const { submitFeedback, getFeedback, getFeatureUsage } = require("../controllers/feedbackController");

const router = express.Router();

router.post("/submit", submitFeedback);
router.get("/all", getFeedback);
router.get("/analytics", getFeatureUsage);

module.exports = router;
