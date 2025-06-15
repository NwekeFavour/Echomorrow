const Letter = require('../models/letter');
const sendLetterEmail = require('../utils/sendEmail');

exports.sendLetter = async (req, res) => {
  const { name, email, message, deliveryDate } = req.body;

  if (!email || !message || !deliveryDate) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  if (!email) {
    console.error("Email is empty or undefined!");
  }






  try {
    console.log("Saving new letter to database...");
    const newLetter = new Letter({
      name,
      email,
      message,
      deliveryDate,
    });

    await newLetter.save();
    console.log("✅ Letter saved!");

    // Send congratulatory email
  const mailContent = `
  <!DOCTYPE html>
  <html lang="en" style="font-family: 'Segoe UI', sans-serif; background-color: #f9fafb;">
    <head>
      <meta charset="UTF-8" />
      <title>EchoMorrow Letter Confirmation</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 2rem auto; background-color: #ffffff; padding: 2rem 2.5rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
        <div style="text-align: center;">
          <h2 style="color: #4b0082; font-size: 24px;">🎉 Congratulations, ${name || 'Friend'}!</h2>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          You've successfully written a letter to your future self on <strong style="color: #4b0082;">EchoMorrow</strong>.
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Your letter is scheduled to be delivered on <strong style="color: #4b0082;">${new Date(deliveryDate).toDateString()}</strong>.
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          We hope this reflection brings you clarity, joy, and insight in the future.
        </p>

        <blockquote style="margin: 2rem 0; font-style: italic; background-color: #f3f0ff; padding: 1rem 1.2rem; border-left: 4px solid #4b0082; border-radius: 6px; color: #555;">
          "Letters to your future self are seeds of wisdom planted today."
        </blockquote>

        <p style="font-size: 16px; color: #333;">Stay curious,</p>
        <p style="font-weight: bold; color: #4b0082;">The EchoMorrow Team 💌</p>

            <hr style="margin: 2rem 0; border: none; border-top: 1px solid #eee;" />

            <div style="background-color: #fef3c7; padding: 1.5rem; border-radius: 10px; text-align: center;">
              <h3 style="color: #b45309; margin-bottom: 0.5rem;">🚀 Discover New African Startup's Update with Mary @<span style="color: #d97706;">CircuitPress</span></h3>
              <p style="font-size: 14px; color: #92400e;">Explore stories and updates from Africa’s brightest creatives, your gateway to the pulse of innovation on African tech soil.</p>
              <a href="https://www.circuitpress.info" style="background-color: #f59e0b; color: white; padding: 0.6rem 1.2rem; border-radius: 6px; text-decoration: none; font-weight: bold;">
                ✨ Join CircuitPress
              </a>
            </div>

        <footer style="text-align: center; font-size: 12px; color: #888; margin-top: 1rem;">
          <p>Thank you for using EchoMorrow 🌿</p>
          <p>&copy; ${new Date().getFullYear()} EchoMorrow. All rights reserved.</p>
        </footer>
      </div>
    </body>
  </html>
`;


    await sendLetterEmail({
      to: email,
      subject: '✨ Your Letter to the Future is Scheduled!',
      html: mailContent,
    });

    console.log("Sending email to:", email);

    res.status(201).json({ message: 'Letter scheduled and email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong while scheduling your letter.' });
  }
};