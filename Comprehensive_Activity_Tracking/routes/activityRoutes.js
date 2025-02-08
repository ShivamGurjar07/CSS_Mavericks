const express = require("express");
const router = express.Router();
const {
  logActivity,
  logMultipleActivities,
  getAllActivities,
} = require("../controllers/activityController");
const { searchActivity } = require("../controllers/searchActivity");
const { summarizedActivities } = require("../controllers/summarizedActivities");

router.post("/", logActivity);
router.post("/batch", logMultipleActivities);
router.get("/", getAllActivities);
router.get("/search", searchActivity);
router.get("/summarized", summarizedActivities);

module.exports = router;
