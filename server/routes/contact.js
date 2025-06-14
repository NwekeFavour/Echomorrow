const express = require('express');
const router = express.Router();
const sendMail = require('../utils/sendEmail');

router.post('/contact-us', async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en" style="margin: 0; padding: 0; background-color: #f4f4f7; font-family: 'Segoe UI', sans-serif;">
        <head>
            <meta charset="UTF-8" />
            <title>New Contact Message</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f7;">
            <table width="100%" cellpadding="0" cellspacing="0" style="padding: 2rem 0;">
            <tr>
                <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 0 20px rgba(0,0,0,0.05); padding: 2rem;">
                    <!-- Header -->
                    <tr>
                    <td style="padding-bottom: 1rem;">
                        <h1 style="color: #4b0082; margin: 0; font-size: 24px;">📬 New Contact Message</h1>
                        <p style="margin: 0; color: #888;">You've received a new message from EchoMorrow</p>
                    </td>
                    </tr>

                    <!-- Email -->
                    <tr>
                    <td style="padding: 1.5rem 0; text-align: center;">
                        <p style="font-size: 14px; color: #555; background-color: #f3f0ff; padding: 0.75rem; border-left: 4px solid #4b0082; border-radius: 6px; display: inline-block;">
                        <strong>Email:</strong> ${email}
                        </p>
                    </td>
                    </tr>

                    <!-- Name -->
                    <tr>
                    <td style="padding: 0.75rem 0;">
                        <p style="margin: 0; font-size: 16px; color: #333;"><strong>Name:</strong> ${firstName} ${lastName}</p>
                    </td>
                    </tr>

                    <!-- Subject -->
                    <tr>
                    <td style="padding: 0.75rem 0;">
                        <p style="margin: 0; font-size: 16px; color: #333;"><strong>Subject:</strong> ${subject}</p>
                    </td>
                    </tr>

                    <!-- Message -->
                    <tr>
                    <td style="padding: 0.75rem 0;">
                        <p style="margin: 0; font-size: 16px; color: #333;"><strong>Message:</strong></p>
                        <p style="margin-top: 0.5rem; padding: 1rem; background-color: #f9f9f9; border-radius: 8px; font-size: 15px; color: #444; line-height: 1.6;">
                        ${message}
                        </p>
                    </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                    <td align="right" style="padding-top: 1.5rem;">
                        <p style="font-weight: bold; color: #4b0082; font-size: 14px;">— The EchoMorrow Team 💌</p>
                    </td>
                    </tr>

                    <tr>
                    <td align="center" style="font-size: 12px; color: #888;">
                        <p>Thank you for using EchoMorrow 🌿</p>
                        <p style="margin: 0;">&copy; ${new Date().getFullYear()} EchoMorrow. All rights reserved.</p>
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
            </table>
        </body>
        </html>

    `;

    await sendMail({
      to: 'oknown02@gmail.com',
      subject: `EchoMorrow Contact Form - ${subject}`,
      html: htmlContent,
    });

    res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

module.exports = router;
