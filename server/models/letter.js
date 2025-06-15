const mongoose = require('mongoose');

const letterSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  deliveryDate: {
    type: Date, // ✅ VERY IMPORTANT: must be Date type to store time info
    required: true,
  },
  isSent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Letter', letterSchema);
