const User = require('../models/user');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
    expiresIn: '30m',
  });
};

exports.register = async (req, res) => {
  const { username, email, password, isAdmin } = req.body;
  const user = await User.create({ username, email, password, isAdmin });
  res.status(201).json({ token: generateToken(user), user });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password)))
    return res.status(401).json({ message: 'Invalid credentials' });

  res.json({ token: generateToken(user), user });
};
