const express = require("express");
const router = express.Router();
const {
  createGoal,
  getUserGoals,
  recommendGoals,
} = require("../controllers/goalController");

router.post("/", createGoal);
router.get("/:userId", getUserGoals);
router.get("/recommendations/:userId", recommendGoals);

module.exports = router;
