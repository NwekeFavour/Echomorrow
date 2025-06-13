const mongoose = require('mongoose');

const letterSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  deliveryDate: Date,
  isSent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Letter', letterSchema);
