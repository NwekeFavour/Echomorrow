// routes/index.js
const express = require('express');
const router = express.Router();
const { home } = require('../controllers/index');

router.get('/', home);

module.exports = router;
