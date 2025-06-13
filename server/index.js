// app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require("./routes/auth")
const letterRoutes = require("./routes/letter")

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const indexRoutes = require('./routes/index');
const startScheduler = require('./utils/letterScheduler');
const connectDB = require('./config/db');
startScheduler();
app.use('/', indexRoutes);
app.use("/api/auth", authRoutes)
app.use("/api/letters", letterRoutes)


connectDB();
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
