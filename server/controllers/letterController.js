const Letter = require('../models/letter');

exports.sendLetter = async (req, res) => {
  const { name, email, message, deliveryDate } = req.body;

  if (!email || !message || !deliveryDate) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const newLetter = new Letter({
    name,
    email,
    message,
    deliveryDate,
  });

  await newLetter.save();
  res.status(201).json({ message: 'Letter scheduled successfully!' });
};
