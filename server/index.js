// app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const letterRoutes = require('./routes/letter');
const indexRoutes = require('./routes/index');
const startScheduler = require('./utils/letterScheduler');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', indexRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/letters', letterRoutes);

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
