const cron = require('node-cron');
const Letter = require('../models/letter');
const sendLetterEmail = require('./sendEmail');

/**
 * Cron job: runs daily at 00:01 AM
 */
const startScheduler = () => {
  cron.schedule('1 0 * * *', async () => {
    console.log("📅 Running letter scheduler...");

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to midnight

    try {
      const lettersDue = await Letter.find({
        deliveryDate: { $eq: today },
        isSent: { $ne: true }
      });

      if (lettersDue.length === 0) {
        console.log("No letters to send today.");
        return;
      }

      for (const letter of lettersDue) {
        const emailContent = `
          <!DOCTYPE html>
          <html lang="en" style="font-family: 'Segoe UI', sans-serif; background-color: #f9fafb;">
            <head>
              <meta charset="UTF-8" />
              <title>Your EchoMorrow Letter</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #f9fafb;">
              <div style="max-width: 600px; margin: 2rem auto; background-color: #ffffff; padding: 2.5rem; border-radius: 12px; box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);">
                <div style="text-align: center;">
                  <h2 style="color: #4b0082; font-size: 24px;">📩 Hello ${letter.name || 'Friend'}, your letter has arrived!</h2>
                </div>

                <p style="font-size: 16px; color: #333; line-height: 1.6; margin-top: 1.2rem;">
                  This is the heartfelt message you wrote to yourself on <strong style="color: #4b0082;">EchoMorrow</strong>:
                </p>

                <blockquote style="margin: 1.5rem 0; padding: 1.5rem; background-color: #f4f3ff; border-left: 4px solid #4b0082; border-radius: 8px; color: #444; font-style: italic;">
                  ${letter.message}
                </blockquote>

                <p style="font-size: 16px; color: #333; line-height: 1.6;">
                  Reflect on your words. Let them guide you. Let them remind you of how far you've come.
                </p>

                <p style="font-size: 16px; color: #333;">With purpose and love,</p>
                <p style="font-weight: bold; color: #4b0082;">– The EchoMorrow Team 💌</p>

                <hr style="margin: 2rem 0; border: none; border-top: 1px solid #eee;" />

                <footer style="text-align: center; font-size: 12px; color: #888; margin-top: 2rem;">
                  <p>Thank you for using EchoMorrow 🌿</p>
                  <p>&copy; ${new Date().getFullYear()} EchoMorrow. All rights reserved.</p>
                </footer>
              </div>
            </body>
          </html>
        `;

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
