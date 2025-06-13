require('dotenv').config();
const nodemailer = require('nodemailer');

const sendLetterEmail = async ({ to, subject, html }) => {
  if (!to || !subject || !html) {
    console.error("❌ Missing email parameters:", { to, subject, html });
    throw new Error("Missing email parameters");
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // <- bypass self-signed cert error
    },
  });

  const mailOptions = {
    from: `"EchoMorrow" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  };

  console.log("📤 Sending email to:", to);
  console.log("SUBJECT:", subject)

  const result = await transporter.sendMail(mailOptions);
  console.log("✅ Email sent:", result);
};

module.exports = sendLetterEmail;