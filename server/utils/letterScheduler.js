const cron = require('node-cron');
const Letter = require('../models/letter');
const sendLetterEmail = require('./sendEmail');

const startScheduler = () => {
  cron.schedule('* * * * *', async () => {
    const now = new Date();

    const lettersToSend = await Letter.find({
      deliveryDate: { $lte: now },
      isSent: false,
    });

    for (const letter of lettersToSend) {
      try {
        await sendLetterEmail(
          letter.email,
          'A Letter from Your Past Self',
          `Hi ${letter.name || 'there'},\n\n${letter.message}\n\n— EchoMorrow`
        );

        letter.isSent = true;
        await letter.save();

        console.log(`Sent letter to ${letter.email}`);
      } catch (error) {
        console.error('Failed to send letter:', error.message);
      }
    }
  });
};

module.exports = startScheduler;
