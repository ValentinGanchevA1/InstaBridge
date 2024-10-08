// models/Dataset.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Dataset = sequelize.define('Dataset', {
    category: { type: DataTypes.STRING, allowNull: false },
    value: { type: DataTypes.FLOAT, allowNull: false },
    date: { type: DataTypes.DATEONLY, allowNull: false }
});

module.exports = Dataset;
