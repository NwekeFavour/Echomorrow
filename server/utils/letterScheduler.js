const cron = require('node-cron');
const Letter = require('../models/letter');
const sendLetterEmail = require('./sendEmail');

const startScheduler = () => {
  cron.schedule('1 0 * * *', async () => {
    console.log("📅 Running letter scheduler...");

    // Get today's date at 00:00:00
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get tomorrow's date at 00:00:00
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    try {
      const lettersDue = await Letter.find({
        deliveryDate: { $gte: today, $lt: tomorrow },
        isSent: { $ne: true },
      });

      if (lettersDue.length === 0) {
        console.log("No letters to send today.");
        return;
      }

      for (const letter of lettersDue) {
        const emailContent = `...`; // your email HTML here

        await sendLetterEmail({
          to: letter.email,
          subject: "📬 Your Letter from the Past (EchoMorrow)",
          html: emailContent,
        });

        letter.isSent = true;
        await letter.save();

        console.log(`✅ Sent letter to ${letter.email}`);
      }
    } catch (err) {
      console.error("❌ Error in letter scheduler:", err);
    }
  });
};

module.exports = startScheduler;
