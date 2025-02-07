const express = require("express");
const router = express.Router();
const {
  exportCSV,
  exportJSON,
  exportXML,
} = require("../controllers/exportController");

router.get("/csv", exportCSV);
router.get("/json", exportJSON);
router.get("/xml", exportXML);

module.exports = router;
