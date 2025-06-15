// app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const letterRoutes = require('./routes/letter');
const indexRoutes = require('./routes/index');
const startScheduler = require('./utils/letterScheduler');
const connectDB = require('./config/db');
const contact = require("./routes/contact")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = [
  'http://localhost:5173',
  'https://echomorrow-beta.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
;
app.use(express.json());

// Routes
app.use('/', indexRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/letters', letterRoutes);
app.use('/api', contact);

// Connect DB and start server
const startServer = async () => {
  try {
    await connectDB();
    startScheduler(); // safe to run after DB connects
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();
