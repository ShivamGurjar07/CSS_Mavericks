const axios = require('axios');
const User = require('../models/User');

exports.getUserAnalytics = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(404).send("User not found");

        const { data } = await axios.post("http://ml_model:6000/analyze", { user });

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
