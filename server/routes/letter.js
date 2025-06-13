const router = require('express').Router();
const { sendLetter } = require('../controllers/letterController');

router.post('/send', sendLetter);

module.exports = router;
