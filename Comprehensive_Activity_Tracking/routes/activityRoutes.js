const express = require("express");
const router = express.Router();
const {
  logActivity,
  logMultipleActivities,
  getAllActivities,
} = require("../controllers/activityController");

router.post("/", logActivity);
router.post("/batch", logMultipleActivities);
router.get("/", getAllActivities);

module.exports = router;
