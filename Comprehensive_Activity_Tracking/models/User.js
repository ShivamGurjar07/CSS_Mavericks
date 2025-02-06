const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: String,
    role: { type: String, enum: ['user', 'trainer', 'admin'], default: 'user' },
    otpSecret: String
});

module.exports = mongoose.model('User', UserSchema);
