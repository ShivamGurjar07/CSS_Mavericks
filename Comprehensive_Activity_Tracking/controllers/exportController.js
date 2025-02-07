const Activity = require("../models/ExportsActivity");
const { Parser } = require("json2csv");
const { json2xml } = require("xml-js");
const fs = require("fs");
const cron = require("node-cron");

const exportCSV = async (req, res) => {
  try {
    const activities = await Activity.find();
    const parser = new Parser();
    const csvData = parser.parse(activities);
    res.header("Content-Type", "text/csv");
    res.attachment("activities.csv");
    res.send(csvData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const exportJSON = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const exportXML = async (req, res) => {
  try {
    const activities = await Activity.find();
    const xmlData = json2xml(JSON.stringify(activities), {
      compact: true,
      spaces: 4,
    });
    res.header("Content-Type", "application/xml");
    res.send(xmlData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

cron.schedule("0 0 * * *", async () => {
  try {
    const activities = await Activity.find();
    const parser = new Parser();
    const csvData = parser.parse(activities);
    fs.writeFileSync("daily_activities.csv", csvData);
    console.log("Daily activity export completed.");
  } catch (err) {
    console.error("Error during scheduled export:", err);
  }
});

module.exports = { exportCSV, exportJSON, exportXML };
