// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');
const { sequelize } = require('./config/db');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/api/data', dataRoutes);

// Database connection
sequelize.sync().then(() => {
    console.log("Database connected successfully.");
}).catch(err => console.error("Database connection failed:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
