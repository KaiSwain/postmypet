// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();


const petRoutes = require("./routes/petRoutes")
app.use('/pets', petRoutes)

const registerRoutes = require("./routes/authRoutes")
app.use('/auth', registerRoutes)

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});